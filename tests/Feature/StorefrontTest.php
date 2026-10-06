<?php

namespace Tests\Feature;

use App\Models\Page;
use App\Models\Product;
use App\Models\User;
use Database\Seeders\StoreSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Tests\TestCase;

class StorefrontTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(StoreSeeder::class);
    }

    public function test_seeded_storefront_and_catalog_are_available(): void
    {
        $this->assertDatabaseCount('products', 26);
        $this->assertDatabaseCount('catalog_photos', 49);
        $this->get('/')->assertOk()->assertSee('أناقة بترافقك')->assertSee('classic-wingtip');
        $this->get('/catalog')->assertOk()->assertSee('V-0016');
        $this->get('/products/classic-wingtip')->assertOk()->assertSee('أوكسفورد كلاسيك');
        $this->get('/api/products')->assertOk()->assertJsonCount(26, 'products');
        $this->assertDatabaseHas('products', ['id' => 'classic-wingtip', 'catalog_code' => 'V-0010']);
    }

    public function test_order_price_comes_from_current_product_and_discount(): void
    {
        $product = Product::query()->findOrFail('classic-wingtip');
        $product->update(['price' => 80, 'discount_type' => 'percent', 'discount_value' => 25]);
        $payload = [
            'customerName' => 'عميل تجريبي',
            'phone' => '031234567',
            'area' => 'بيروت',
            'address' => 'شارع رئيسي مبنى 12',
            'items' => [['id' => $product->id, 'size' => 42, 'color' => 'بني', 'quantity' => 2, 'price' => 1]],
            'analytics' => ['visitorId' => (string) Str::uuid(), 'sessionId' => (string) Str::uuid()],
        ];

        $this->postJson('/api/orders', $payload)->assertCreated()->assertJsonPath('totalUsd', 120);
        $this->assertDatabaseHas('orders', ['total_usd' => 120]);
        $this->assertDatabaseHas('visitor_events', ['event_type' => 'order_submitted', 'visitor_id' => $payload['analytics']['visitorId']]);
        $this->postJson('/api/orders', array_replace($payload, ['items' => [['id' => $product->id, 'size' => 99, 'color' => 'بني', 'quantity' => 1]]]))->assertUnprocessable();
    }

    public function test_management_requires_login_and_can_change_product(): void
    {
        $this->get('/manage')->assertRedirect('/manage/login');
        $user = User::factory()->create();
        $this->actingAs($user)->put('/manage/products/classic-wingtip', [
            'name' => 'حذاء جديد',
            'category' => 'formal',
            'price' => 75,
            'colors_text' => 'أسود، بني',
            'sizes_text' => '40، 41، 42',
            'is_active' => '1',
            'is_featured' => '1',
        ])->assertRedirect();
        $this->assertDatabaseHas('products', ['id' => 'classic-wingtip', 'name' => 'حذاء جديد', 'is_featured' => 1]);
        $this->get('/manage/products')->assertOk()->assertSee('حذاء جديد');
        foreach (['/manage', '/manage/products/create', '/manage/photos', '/manage/photos/create', '/manage/pages', '/manage/pages/create', '/manage/orders', '/manage/analytics', '/manage/settings'] as $path) {
            $this->get($path)->assertOk();
        }
    }

    public function test_new_product_gets_permanent_code_and_catalog_photo(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create())->post('/manage/products', [
            'name' => 'موديل تجريبي',
            'category' => 'casual',
            'price' => 55,
            'colors_text' => 'أسود، بني',
            'sizes_text' => '40، 41',
            'image' => UploadedFile::fake()->image('shoe.jpg'),
            'is_active' => '1',
        ])->assertRedirect();
        $product = Product::query()->where('name', 'موديل تجريبي')->firstOrFail();
        $this->assertSame('V-0050', $product->catalog_code);
        $this->assertDatabaseHas('catalog_photos', ['code' => 'V-0050', 'product_id' => $product->id]);
        $this->get('/catalog')->assertOk()->assertSee('V-0050');
    }

    public function test_page_and_catalog_photo_edits_are_published_and_seed_is_idempotent(): void
    {
        Storage::fake('public');
        $this->actingAs(User::factory()->create());

        $this->put('/manage/pages/'.Page::query()->where('slug', 'story')->value('id'), [
            'slug' => 'story',
            'title' => 'قصتنا',
            'subtitle' => 'حكاية جديدة',
            'body' => 'نص جديد ظاهر في الصفحة الرئيسية.',
            'is_published' => '1',
        ])->assertRedirect();
        $this->get('/')->assertOk()->assertSee('حكاية جديدة');

        $this->post('/manage/photos', [
            'alt' => 'صورة موديل جديد',
            'category' => 'formal',
            'image' => UploadedFile::fake()->image('catalog.jpg'),
            'is_active' => '1',
        ])->assertRedirect();
        $this->assertDatabaseHas('catalog_photos', ['code' => 'V-0050', 'alt' => 'صورة موديل جديد']);
        $this->get('/catalog')->assertOk()->assertSee('V-0050');

        Product::query()->findOrFail('classic-wingtip')->update(['price' => 62]);
        $this->seed(StoreSeeder::class);
        $this->assertDatabaseCount('products', 26);
        $this->assertDatabaseHas('products', ['id' => 'classic-wingtip', 'price' => 62]);
    }

    public function test_changing_a_product_code_keeps_the_old_code_reserved(): void
    {
        $this->actingAs(User::factory()->create())->put('/manage/products/classic-wingtip', [
            'name' => 'أوكسفورد كلاسيك وينغ تيب',
            'catalog_code' => 'V-0050',
            'category' => 'formal',
            'price' => 70,
            'colors_text' => 'أسود، بني',
            'sizes_text' => '40، 41',
            'is_active' => '1',
        ])->assertRedirect();

        $this->assertDatabaseHas('catalog_photos', ['code' => 'V-0010', 'is_active' => 0]);
        $this->assertDatabaseHas('catalog_photos', ['code' => 'V-0050', 'is_active' => 1]);
        $this->assertDatabaseHas('products', ['id' => 'classic-wingtip', 'catalog_code' => 'V-0050']);
    }
}
