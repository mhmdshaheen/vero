<?php

namespace App\Http\Controllers;

use App\Models\CatalogPhoto;
use App\Models\Page;
use App\Models\Product;
use App\Models\SiteSetting;
use Illuminate\Contracts\View\View;
use Illuminate\Http\JsonResponse;

class StorefrontController extends Controller
{
    public function home(): View
    {
        abort_unless(Page::query()->where('slug', 'home')->where('is_published', true)->exists(), 404);

        return view('store.home', [
            'pages' => Page::query()->get()->keyBy('slug'),
            'products' => Product::query()->where('is_active', true)->orderByDesc('is_featured')->orderBy('sort_order')->get(),
            'whatsapp' => SiteSetting::valueFor('whatsapp_number', '96178978270'),
            'video' => SiteSetting::valueFor('hero_video'),
            'poster' => SiteSetting::valueFor('hero_poster'),
        ]);
    }

    public function product(Product $product): View
    {
        abort_unless($product->is_active, 404);

        return view('store.product', [
            'product' => $product,
            'whatsapp' => SiteSetting::valueFor('whatsapp_number', '96178978270'),
            'policy' => Page::query()->where('slug', 'returns-policy')->first(),
        ]);
    }

    public function catalog(): View
    {
        $hiddenProductIds = Product::query()->where('is_active', false)->pluck('id');

        return view('store.catalog', [
            'photos' => CatalogPhoto::query()->where('is_active', true)->where(function ($query) use ($hiddenProductIds): void {
                $query->whereNull('product_id')->orWhereNotIn('product_id', $hiddenProductIds);
            })->orderBy('sort_order')->get()->groupBy('category'),
            'headingNote' => SiteSetting::valueFor('catalog_heading_note'),
        ]);
    }

    public function page(Page $page): View
    {
        abort_unless($page->is_published, 404);

        return view('store.page', compact('page'));
    }

    public function products(): JsonResponse
    {
        return response()->json(['products' => Product::query()->where('is_active', true)->orderByDesc('is_featured')->orderBy('sort_order')->get()->map->storePayload()]);
    }
}
