<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CatalogPhoto;
use App\Models\Product;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class CatalogPhotoController extends Controller
{
    public function index(): View
    {
        return view('admin.photos.index', ['photos' => CatalogPhoto::query()->orderBy('sort_order')->get()]);
    }

    public function create(): View
    {
        return view('admin.photos.form', ['photo' => new CatalogPhoto, 'products' => Product::query()->orderBy('name')->get()]);
    }

    public function edit(CatalogPhoto $photo): View
    {
        return view('admin.photos.form', ['photo' => $photo, 'products' => Product::query()->orderBy('name')->get()]);
    }

    public function store(Request $request): RedirectResponse
    {
        $photo = new CatalogPhoto;
        $this->save($request, $photo);

        return redirect()->route('admin.photos.edit', $photo)->with('success', 'تمت إضافة الصورة.');
    }

    public function update(Request $request, CatalogPhoto $photo): RedirectResponse
    {
        $this->save($request, $photo);

        return back()->with('success', 'تم حفظ الصورة.');
    }

    private function save(Request $request, CatalogPhoto $photo): void
    {
        $data = $request->validate([
            'alt' => ['required', 'string', 'max:255'],
            'category' => ['required', Rule::in(['formal', 'casual', 'sport', 'boot', 'medical'])],
            'product_id' => ['nullable', Rule::exists('products', 'id')],
            'image' => [$photo->exists ? 'nullable' : 'required', 'image', 'max:5120'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);
        if (! $photo->exists) {
            $lastPhoto = CatalogPhoto::query()->pluck('code')->map(fn (string $code) => (int) substr($code, 2))->max() ?? 0;
            $lastProduct = Product::query()->whereNotNull('catalog_code')->pluck('catalog_code')->map(fn (string $code) => (int) substr($code, 2))->max() ?? 0;
            $next = max($lastPhoto, $lastProduct) + 1;
            $photo->code = 'V-'.str_pad((string) $next, 4, '0', STR_PAD_LEFT);
            $photo->photo_key = 'catalog:uploaded:'.Str::uuid();
        }
        $photo->fill([
            'alt' => $data['alt'],
            'category' => $data['category'],
            'product_id' => $data['product_id'] ?? null,
            'sort_order' => $data['sort_order'] ?? $photo->id ?? 0,
            'is_active' => $request->boolean('is_active'),
        ]);
        if ($request->hasFile('image')) {
            $photo->image_path = '/storage/'.$request->file('image')->store('catalog', 'public');
        }
        $photo->save();
    }
}
