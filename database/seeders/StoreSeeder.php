<?php

namespace Database\Seeders;

use App\Models\CatalogPhoto;
use App\Models\Page;
use App\Models\Product;
use App\Models\SiteSetting;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class StoreSeeder extends Seeder
{
    public function run(): void
    {
        $products = json_decode(file_get_contents(database_path('seed-data/products.json')), true, flags: JSON_THROW_ON_ERROR);
        $photos = json_decode(file_get_contents(database_path('seed-data/photo-records.json')), true, flags: JSON_THROW_ON_ERROR);
        $primaryCodes = json_decode(file_get_contents(database_path('seed-data/primary-codes.json')), true, flags: JSON_THROW_ON_ERROR);

        foreach ($products as $index => $product) {
            Product::query()->firstOrCreate(['id' => $product['id']], [
                'catalog_code' => $primaryCodes[$product['id']] ?? null,
                'name' => $product['name'],
                'description' => $product['description'],
                'category' => $product['category'],
                'price' => $product['price'],
                'image_path' => $product['imagePath'],
                'color_images' => $product['colorImages'] ?? [],
                'colors' => $product['colors'],
                'sizes' => $product['sizes'],
                'size_guide' => $product['sizeGuide'] ?? [],
                'fit_note' => $product['fitNote'] ?? '',
                'is_active' => $product['active'] ?? true,
                'is_featured' => in_array($product['id'], ['classic-wingtip', 'casual-lace-up', 'suede-loafer'], true),
                'sort_order' => $index,
            ]);
        }

        foreach ($photos as $photo) {
            CatalogPhoto::query()->firstOrCreate(['code' => $photo['code']], [
                'photo_key' => $photo['key'],
                'image_path' => $photo['imagePath'],
                'category' => $photo['category'],
                'alt' => $photo['alt'],
                'product_id' => $photo['productId'],
                'is_active' => $photo['isActive'],
                'sort_order' => $photo['sortOrder'],
            ]);
        }

        foreach ([
            'home' => ['الرئيسية', 'أناقة بترافقك بكل خطوة', 'أحذية رجالية من الجلد الطبيعي، تجمع الراحة والإتقان في صناعة لبنانية بخبرة تتجاوز 40 سنة.'],
            'story' => ['قصتنا', 'من المصنع، لإلك', 'VERO امتداد لخبرة مصنع لبناني بالأحذية الرجالية لأكثر من 40 سنة. منختار الجلد الطبيعي ومنهتم بالتفاصيل، لنقدّم حذاء تلبسه بثقة وراحة.'],
            'contact' => ['تواصل معنا', 'عجبك موديل؟', 'راسلنا على واتساب وابعث صورة الحذاء أو اسمه لنساعدك بالمقاس والتفاصيل والطلب.'],
            'returns-policy' => ['سياسة التبديل والإرجاع', 'سياسة التبديل والإرجاع', "كل الموديلات والألوان متوفرة وجاهزة للتصنيع حسب الطلب.\n\nرضاكم وثقتكم أساس شغلنا في VERO. يمكنكم معاينة الحذاء وتجربته عند الاستلام، وطلب تبديل المقاس إذا لم يكن مناسبًا. وفي حال عدم رضاكم عن الموديل أو النوعية، يمكنكم طلب التبديل أو الإرجاع عند الاستلام، بالتنسيق معنا.\n\nنتحمّل أجور التوصيل للتبديل أو الإرجاع، من دون أي كلفة إضافية عليكم."],
            'manufacturing' => ['كيف نصنع حذاءك', 'صناعة لبنانية بخبرة', 'كل الموديلات والألوان متوفرة وجاهزة للتصنيع حسب الطلب.'],
        ] as $slug => [$title, $subtitle, $body]) {
            Page::query()->firstOrCreate(['slug' => $slug], compact('title', 'subtitle', 'body'));
        }

        foreach (['whatsapp_number' => '96178978270', 'hero_video' => '/assets/vero-hero.mp4', 'hero_poster' => '/assets/vero-video-poster.jpg', 'catalog_heading_note' => '٧٠$ — جلد طبيعي من الداخل والخارج'] as $key => $value) {
            SiteSetting::query()->firstOrCreate(['key' => $key], ['value' => $value]);
        }

        $email = env('ADMIN_EMAIL');
        $password = env('ADMIN_PASSWORD');
        if ($email && $password) {
            User::query()->firstOrCreate(['email' => $email], ['name' => 'VERO Admin', 'password' => Hash::make($password)]);
        }
    }
}
