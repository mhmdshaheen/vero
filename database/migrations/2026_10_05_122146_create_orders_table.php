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
        Schema::create('orders', function (Blueprint $table) {
            $table->string('id', 20)->primary();
            $table->string('customer_name', 100);
            $table->string('phone', 25);
            $table->string('area', 100);
            $table->string('address', 300);
            $table->text('notes')->nullable();
            $table->json('items');
            $table->decimal('total_usd', 10, 2);
            $table->string('status', 30)->default('new')->index();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
