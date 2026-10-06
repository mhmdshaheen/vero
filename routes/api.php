<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\StorefrontController;
use Illuminate\Support\Facades\Route;

Route::get('/products', [StorefrontController::class, 'products'])->name('api.products');
Route::post('/orders', [OrderController::class, 'store'])->middleware('throttle:20,1')->name('api.orders.store');
