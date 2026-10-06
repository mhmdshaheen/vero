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
use Illuminate\Validation\ValidationException;

class ProductController extends Controller
{
    public function index(): View
    {
        return view('admin.products.index', ['products' => Product::query()->orderBy('sort_order')->get()]);
    }

    public function create(): View
    {
        return view('admin.products.form', ['product' => new Product]);
    }

    public function edit(Product $product): View
    {
        return view('admin.products.form', compact('product'));
    }

    public function store(Request $request): RedirectResponse
    {
        $product = new Product;
        $this->save($request, $product);

        return redirect()->route('admin.products.edit', $product)->with('success', 'تمت إضافة المنتج.');
    }

    public function update(Request $request, Product $product): RedirectResponse
    {
        $this->save($request, $product);

        return back()->with('success', 'تم حفظ المنتج.');
    }

    public function toggle(Product $product): RedirectResponse
    {
        $product->update(['is_active' => ! $product->is_active]);

        return back()->with('success', 'تم تحديث ظهور المنتج.');
    }

    private function save(Request $request, Product $product): void
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'catalog_code' => ['nullable', 'regex:/^V-[0-9]{4,}$/', Rule::unique('products', 'catalog_code')->ignore($product->id, 'id')],
            'description' => ['nullable', 'string', 'max:5000'],
            'category' => ['required', Rule::in(['formal', 'casual', 'sport', 'boot', 'medical'])],
            'price' => ['required', 'numeric', 'min:0', 'max:999999'],
            'discount_type' => ['nullable', Rule::in(['percent', 'fixed'])],
            'discount_value' => ['nullable', 'numeric', 'min:0'],
            'colors_text' => ['required', 'string', 'max:1000'],
            'sizes_text' => ['required', 'string', 'max:500'],
            'fit_note' => ['nullable', 'string', 'max:2000'],
            'image' => [$product->exists ? 'nullable' : 'required', 'image', 'max:5120'],
            'gallery_images.*' => ['nullable', 'image', 'max:5120'],
            'gallery_colors.*' => ['nullable', 'string', 'max:100'],
            'remove_images' => ['nullable', 'array'],
            'remove_images.*' => ['string'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $colors = array_values(array_unique(array_filter(array_map('trim', preg_split('/[,،\n]+/u', $data['colors_text'])))));
        $sizes = array_values(array_unique(array_map('intval', array_filter(array_map('trim', preg_split('/[,،\n]+/u', $data['sizes_text']))))));
        if (! $colors || ! $sizes || collect($sizes)->contains(fn (int $size) => $size < 20 || $size > 60)) {
            throw ValidationException::withMessages(['colors_text' => 'أدخل ألوانًا ومقاسات صحيحة بين 20 و60.']);
        }
        if (($data['discount_type'] ?? null) === 'percent' && ($data['discount_value'] ?? 0) > 100) {
            throw ValidationException::withMessages(['discount_value' => 'النسبة لا يمكن أن تتجاوز 100%.']);
        }
        if (($data['discount_type'] ?? null) === 'fixed' && ($data['discount_value'] ?? 0) > $data['price']) {
            throw ValidationException::withMessages(['discount_value' => 'قيمة الخصم لا يمكن أن تتجاوز السعر.']);
        }
        if (! empty($data['catalog_code']) && $data['catalog_code'] !== $product->catalog_code && CatalogPhoto::query()->where('code', $data['catalog_code'])->exists()) {
            throw ValidationException::withMessages(['catalog_code' => 'الكود مستخدم لصورة كتالوج أخرى.']);
        }

        $gallery = collect($product->color_images ?? [])->reject(fn (array $image) => in_array($image['imagePath'], $data['remove_images'] ?? [], true))->values()->all();
        foreach ($request->file('gallery_images', []) as $index => $image) {
            $color = $data['gallery_colors'][$index] ?? $colors[0];
            if (! in_array($color, $colors, true)) {
                throw ValidationException::withMessages(['gallery_colors' => 'لون الصورة الإضافية يجب أن يكون ضمن ألوان المنتج.']);
            }
            $gallery[] = ['color' => $color, 'imagePath' => '/storage/'.$image->store('products', 'public')];
        }

        $previousCode = $product->catalog_code;
        if (! $product->exists) {
            $product->id = 'model-'.Str::uuid();
        }
        $code = $data['catalog_code'] ?? $previousCode;
        if (! $code) {
            $lastPhoto = CatalogPhoto::query()->pluck('code')->map(fn (string $item) => (int) substr($item, 2))->max() ?? 0;
            $lastProduct = Product::query()->whereNotNull('catalog_code')->pluck('catalog_code')->map(fn (string $item) => (int) substr($item, 2))->max() ?? 0;
            $code = 'V-'.str_pad((string) (max($lastPhoto, $lastProduct) + 1), 4, '0', STR_PAD_LEFT);
        }
        $product->fill([
            'name' => $data['name'],
            'catalog_code' => $code,
            'description' => $data['description'] ?? '',
            'category' => $data['category'],
            'price' => $data['price'],
            'discount_type' => $data['discount_type'] ?? null,
            'discount_value' => ($data['discount_type'] ?? null) ? ($data['discount_value'] ?? 0) : null,
            'colors' => $colors,
            'sizes' => $sizes,
            'fit_note' => $data['fit_note'] ?? '',
            'color_images' => $gallery,
            'is_active' => $request->boolean('is_active'),
            'is_featured' => $request->boolean('is_featured'),
            'sort_order' => $data['sort_order'] ?? 0,
        ]);
        if ($request->hasFile('image')) {
            $product->image_path = '/storage/'.$request->file('image')->store('products', 'public');
        }
        $product->save();

        $photo = CatalogPhoto::query()->where('code', $previousCode ?? $code)->where('product_id', $product->id)->first();
        if ($photo && $previousCode !== $code) {
            $photo->update(['is_active' => false]);
            $photo = null;
        }
        if (! $photo) {
            $photo = new CatalogPhoto(['photo_key' => 'product:'.$product->id.':'.$code, 'product_id' => $product->id]);
        }
        $photo->fill([
            'code' => $code,
            'image_path' => $product->image_path,
            'category' => $product->category,
            'alt' => $product->name,
            'is_active' => $product->is_active,
            'sort_order' => $product->sort_order,
        ]);
        $photo->save();
    }
}
