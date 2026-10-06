<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->string('id', 120)->primary();
            $table->string('catalog_code', 20)->nullable()->unique();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('category', 30)->index();
            $table->decimal('price', 10, 2);
            $table->string('discount_type', 10)->nullable();
            $table->decimal('discount_value', 10, 2)->nullable();
            $table->string('image_path');
            $table->json('color_images')->nullable();
            $table->json('colors');
            $table->json('sizes');
            $table->json('size_guide')->nullable();
            $table->text('fit_note')->nullable();
            $table->boolean('is_active')->default(true)->index();
            $table->boolean('is_featured')->default(false)->index();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
