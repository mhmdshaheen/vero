<?php

namespace App\Http\Controllers;

use App\Models\VisitorEvent;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;

class AnalyticsTrackController extends Controller
{
    public function store(Request $request): Response
    {
        if ($request->header('Origin') !== $request->getSchemeAndHttpHost()) {
            return response('', 403);
        }

        if ($request->user() || preg_match('/bot|crawler|spider|preview/i', $request->userAgent() ?? '')) {
            return response('', 204);
        }

        if (strlen($request->getContent()) > 1600) {
            return response('', 413);
        }

        $data = Validator::make($request->all(), [
            'id' => ['required', 'uuid'],
            'visitorId' => ['required', 'uuid'],
            'sessionId' => ['required', 'uuid'],
            'event' => ['required', 'in:page_view,add_to_cart,checkout_start,whatsapp_click,category_filter'],
            'path' => ['required', 'regex:/^\/(?:products\/[a-z0-9-]{1,100})?$/'],
            'productId' => ['nullable', 'regex:/^[a-z0-9-]{1,100}$/'],
            'category' => ['nullable', 'in:all,formal,casual,sport,boot,medical'],
            'source' => ['nullable', 'max:253', 'regex:/^[a-z0-9.-]+$/i'],
        ])->validate();

        $recent = VisitorEvent::query()
            ->where('session_id', $data['sessionId'])
            ->where('created_at', '>=', Carbon::now('UTC')->subMinute())
            ->count();
        if ($recent >= 120) {
            return response('', 429);
        }

        $path = $data['path'];
        $productId = str_starts_with($path, '/products/') ? substr($path, 10) : ($data['productId'] ?? '');
        $agent = $request->userAgent() ?? '';

        VisitorEvent::query()->insertOrIgnore([[
            'id' => $data['id'],
            'visitor_id' => $data['visitorId'],
            'session_id' => $data['sessionId'],
            'event_type' => $data['event'],
            'path' => $path,
            'product_id' => $productId,
            'category' => $data['category'] ?? '',
            'source' => strtolower($data['source'] ?? 'direct'),
            'device' => preg_match('/ipad|tablet/i', $agent) ? 'tablet' : (preg_match('/mobile|iphone|android/i', $agent) ? 'mobile' : 'desktop'),
            'created_at' => Carbon::now('UTC'),
        ]]);

        return response('', 204);
    }
}
