<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Product;
use App\Models\VisitorEvent;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Throwable;

class OrderController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $data = $request->validate([
            'customerName' => ['required', 'string', 'min:2', 'max:100'],
            'phone' => ['required', 'regex:/^\+?[0-9\s()\-]{7,20}$/'],
            'area' => ['required', 'string', 'min:2', 'max:100'],
            'address' => ['required', 'string', 'min:6', 'max:300'],
            'notes' => ['nullable', 'string', 'max:500'],
            'items' => ['required', 'array', 'min:1', 'max:20'],
            'items.*.id' => ['required', 'string'],
            'items.*.size' => ['required', 'integer'],
            'items.*.color' => ['required', 'string'],
            'items.*.quantity' => ['required', 'integer', 'between:1,10'],
            'analytics' => ['nullable', 'array'],
            'analytics.visitorId' => ['required_with:analytics', 'uuid'],
            'analytics.sessionId' => ['required_with:analytics', 'uuid'],
        ]);

        $products = Product::query()->whereIn('id', collect($data['items'])->pluck('id')->unique())->get()->keyBy('id');
        $items = [];
        $total = 0;

        foreach ($data['items'] as $item) {
            $product = $products->get($item['id']);
            if (! $product || ! $product->is_active || ! in_array($item['size'], $product->sizes ?? [], true) || ! in_array($item['color'], $product->colors ?? [], true)) {
                throw ValidationException::withMessages(['items' => 'هناك منتج أو مقاس أو لون غير صالح. حدّث الصفحة وحاول مجددًا.']);
            }

            $unitPrice = $product->sellingPrice();
            $total += $unitPrice * $item['quantity'];
            $items[] = [
                'id' => $product->id,
                'name' => $product->name,
                'category' => $product->category,
                'size' => $item['size'],
                'color' => $item['color'],
                'quantity' => $item['quantity'],
                'unitPriceUsd' => $unitPrice,
                'imagePath' => $product->image_path,
                'imageUrl' => url($product->image_path),
                'productUrl' => route('products.show', $product),
            ];
        }

        $order = Order::query()->create([
            'id' => 'VR-'.strtoupper(substr(Str::uuid()->toString(), 0, 8)),
            'customer_name' => $data['customerName'],
            'phone' => $data['phone'],
            'area' => $data['area'],
            'address' => $data['address'],
            'notes' => $data['notes'] ?? '',
            'items' => $items,
            'total_usd' => round($total, 2),
            'status' => 'new',
        ]);

        if (isset($data['analytics']) && ! $request->user()) {
            try {
                $session = VisitorEvent::query()->where('session_id', $data['analytics']['sessionId'])->oldest('created_at')->first();
                VisitorEvent::query()->create([
                    'id' => (string) Str::uuid(),
                    'visitor_id' => $data['analytics']['visitorId'],
                    'session_id' => $data['analytics']['sessionId'],
                    'event_type' => 'order_submitted',
                    'path' => '/',
                    'product_id' => '',
                    'category' => '',
                    'source' => $session?->source ?? 'direct',
                    'device' => $session?->device ?? 'desktop',
                    'created_at' => now('UTC'),
                ]);
            } catch (Throwable $exception) {
                Log::warning('Order analytics event could not be recorded.', ['order_id' => $order->id, 'exception' => $exception->getMessage()]);
            }
        }

        return response()->json(['id' => $order->id, 'totalUsd' => (float) $order->total_usd, 'items' => $items], 201);
    }
}
