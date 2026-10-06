<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use App\Models\VisitorEvent;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends Controller
{
    public function index(Request $request): View
    {
        $input = $request->validate([
            'period' => ['nullable', 'in:all,today,7,30'],
            'from' => ['nullable', 'date_format:Y-m-d'],
            'to' => ['nullable', 'date_format:Y-m-d', 'after_or_equal:from'],
        ]);

        $today = Carbon::now('Asia/Beirut')->startOfDay();
        $period = $input['period'] ?? 'all';
        $from = $input['from'] ?? null;
        $to = $input['to'] ?? null;

        if ($from || $to) {
            $start = $from ? Carbon::createFromFormat('!Y-m-d', $from, 'Asia/Beirut')->startOfDay() : Carbon::parse('1970-01-01', 'Asia/Beirut');
            $end = $to ? Carbon::createFromFormat('!Y-m-d', $to, 'Asia/Beirut')->addDay()->startOfDay() : $today->copy()->addDay();
            $period = 'custom';
        } else {
            $start = match ($period) {
                'today' => $today->copy(),
                '7' => $today->copy()->subDays(6),
                '30' => $today->copy()->subDays(29),
                default => Carbon::parse('1970-01-01', 'Asia/Beirut'),
            };
            $end = $today->copy()->addDay();
        }

        $startUtc = $start->copy()->utc()->format('Y-m-d H:i:s.v');
        $endUtc = $end->copy()->utc()->format('Y-m-d H:i:s.v');
        $events = fn () => VisitorEvent::query()->where('created_at', '>=', $startUtc)->where('created_at', '<', $endUtc);
        $orders = fn () => Order::query()->where('status', '!=', 'cancelled')->where('created_at', '>=', $startUtc)->where('created_at', '<', $endUtc);
        $history = fn () => DB::table('historical_order_summaries')->where('created_at', '>=', $startUtc)->where('created_at', '<', $endUtc);

        $totals = $events()->selectRaw("COUNT(DISTINCT session_id) visits, COUNT(DISTINCT visitor_id) visitors, SUM(CASE WHEN event_type='page_view' THEN 1 ELSE 0 END) page_views, SUM(CASE WHEN event_type='page_view' AND product_id<>'' THEN 1 ELSE 0 END) product_views, SUM(CASE WHEN event_type='add_to_cart' THEN 1 ELSE 0 END) cart_adds, SUM(CASE WHEN event_type='checkout_start' THEN 1 ELSE 0 END) checkouts, SUM(CASE WHEN event_type='whatsapp_click' THEN 1 ELSE 0 END) whatsapp, COUNT(DISTINCT CASE WHEN event_type='order_submitted' THEN session_id END) ordering_visits")->first();

        $historicalOrders = $history()->count();
        $metrics = [
            'visits' => (int) $totals->visits,
            'visitors' => (int) $totals->visitors,
            'pageViews' => (int) $totals->page_views,
            'productViews' => (int) $totals->product_views,
            'cartAdds' => (int) $totals->cart_adds,
            'checkouts' => (int) $totals->checkouts,
            'orders' => $orders()->count() + $historicalOrders,
            'whatsapp' => (int) $totals->whatsapp,
            'orderingVisits' => (int) $totals->ordering_visits,
        ];

        $productActivity = $events()->where('product_id', '!=', '')->selectRaw("product_id, SUM(CASE WHEN event_type='page_view' THEN 1 ELSE 0 END) views, SUM(CASE WHEN event_type='add_to_cart' THEN 1 ELSE 0 END) cart_adds")->groupBy('product_id')->get();
        $products = [];
        foreach ($productActivity as $row) {
            $products[$row->product_id] = ['id' => $row->product_id, 'views' => (int) $row->views, 'cartAdds' => (int) $row->cart_adds, 'orders' => 0, 'pairs' => 0];
        }

        foreach ($orders()->get(['items']) as $order) {
            $this->addOrderedProducts($products, $order->items ?? []);
        }
        foreach ($history()->get(['items']) as $order) {
            $this->addOrderedProducts($products, json_decode($order->items, true) ?: []);
        }

        $names = Product::query()->whereIn('id', array_keys($products))->pluck('name', 'id');
        foreach ($products as &$product) {
            $product['name'] = $names[$product['id']] ?? $product['id'];
        }
        unset($product);
        usort($products, fn ($a, $b) => [$b['views'], $b['orders'], $b['cartAdds']] <=> [$a['views'], $a['orders'], $a['cartAdds']]);

        $sources = DB::query()->fromSub(
            $events()->selectRaw('session_id, MIN(source) source')->groupBy('session_id'),
            'sessions'
        )->selectRaw('source, COUNT(*) visits')->groupBy('source')->orderByDesc('visits')->limit(15)->get();

        return view('admin.analytics', [
            'metrics' => $metrics,
            'products' => $products,
            'sources' => $sources,
            'activities' => $events()->latest('created_at')->limit(100)->get(),
            'startedAt' => VisitorEvent::query()->min('created_at'),
            'period' => $period,
            'from' => $from,
            'to' => $to,
            'historicalOrders' => $historicalOrders,
        ]);
    }

    private function addOrderedProducts(array &$products, array $items): void
    {
        $seen = [];
        foreach ($items as $item) {
            $id = $item['id'] ?? null;
            if (! is_string($id) || $id === '') {
                continue;
            }
            $products[$id] ??= ['id' => $id, 'views' => 0, 'cartAdds' => 0, 'orders' => 0, 'pairs' => 0];
            $products[$id]['pairs'] += (int) ($item['quantity'] ?? 1);
            if (! isset($seen[$id])) {
                $products[$id]['orders']++;
                $seen[$id] = true;
            }
        }
    }
}
