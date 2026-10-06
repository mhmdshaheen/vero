<?php

use App\Http\Controllers\Admin\AnalyticsController;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\CatalogPhotoController;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SettingsController;
use App\Http\Controllers\AnalyticsTrackController;
use App\Http\Controllers\StorefrontController;
use App\Models\CatalogPhoto;
use App\Models\Order;
use App\Models\Page;
use App\Models\Product;
use Illuminate\Support\Facades\Route;

Route::get('/', [StorefrontController::class, 'home'])->name('home');
Route::get('/catalog', [StorefrontController::class, 'catalog'])->name('catalog');
Route::get('/products/{product}', [StorefrontController::class, 'product'])->name('products.show');
Route::get('/pages/{page:slug}', [StorefrontController::class, 'page'])->name('pages.show');
Route::redirect('/login', '/manage/login')->name('login');
Route::redirect('/orders', '/manage/orders')->middleware('auth');
Route::post('/api/analytics/track', [AnalyticsTrackController::class, 'store'])->middleware('throttle:180,1')->name('api.analytics.track');

Route::get('/manage/login', [AuthController::class, 'show'])->middleware('guest')->name('admin.login');
Route::post('/manage/login', [AuthController::class, 'login'])->middleware(['guest', 'throttle:5,1'])->name('admin.login.submit');

Route::prefix('manage')->name('admin.')->middleware('auth')->group(function (): void {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/', fn () => view('admin.dashboard', [
        'productCount' => Product::query()->count(),
        'activeCount' => Product::query()->where('is_active', true)->count(),
        'orderCount' => Order::query()->count(),
        'newOrders' => Order::query()->where('status', 'new')->count(),
        'photoCount' => CatalogPhoto::query()->count(),
        'pageCount' => Page::query()->count(),
    ]))->name('dashboard');
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    Route::get('/products/create', [ProductController::class, 'create'])->name('products.create');
    Route::post('/products', [ProductController::class, 'store'])->name('products.store');
    Route::get('/products/{product}/edit', [ProductController::class, 'edit'])->name('products.edit');
    Route::put('/products/{product}', [ProductController::class, 'update'])->name('products.update');
    Route::patch('/products/{product}/toggle', [ProductController::class, 'toggle'])->name('products.toggle');
    Route::get('/pages', [PageController::class, 'index'])->name('pages.index');
    Route::get('/pages/create', [PageController::class, 'create'])->name('pages.create');
    Route::post('/pages', [PageController::class, 'store'])->name('pages.store');
    Route::get('/pages/{page}/edit', [PageController::class, 'edit'])->name('pages.edit');
    Route::put('/pages/{page}', [PageController::class, 'update'])->name('pages.update');
    Route::get('/photos', [CatalogPhotoController::class, 'index'])->name('photos.index');
    Route::get('/photos/create', [CatalogPhotoController::class, 'create'])->name('photos.create');
    Route::post('/photos', [CatalogPhotoController::class, 'store'])->name('photos.store');
    Route::get('/photos/{photo}/edit', [CatalogPhotoController::class, 'edit'])->name('photos.edit');
    Route::put('/photos/{photo}', [CatalogPhotoController::class, 'update'])->name('photos.update');
    Route::get('/orders', [AdminOrderController::class, 'index'])->name('orders.index');
    Route::get('/analytics', [AnalyticsController::class, 'index'])->name('analytics.index');
    Route::patch('/orders/{order}', [AdminOrderController::class, 'update'])->name('orders.update');
    Route::get('/settings', [SettingsController::class, 'edit'])->name('settings.edit');
    Route::put('/settings', [SettingsController::class, 'update'])->name('settings.update');
});
