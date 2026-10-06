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
        Schema::create('catalog_photos', function (Blueprint $table) {
            $table->id();
            $table->string('photo_key')->unique();
            $table->string('code', 20)->unique();
            $table->string('image_path');
            $table->string('category', 30);
            $table->string('alt');
            $table->string('product_id', 120)->nullable()->index();
            $table->boolean('is_active')->default(true);
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('catalog_photos');
    }
};
