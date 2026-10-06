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
        Schema::create('visitor_events', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('visitor_id', 64)->index();
            $table->string('session_id', 64)->index();
            $table->string('event_type', 30)->index();
            $table->string('path', 130);
            $table->string('product_id', 100)->default('')->index();
            $table->string('category', 30)->default('');
            $table->string('source', 253)->default('direct');
            $table->string('device', 20)->default('desktop');
            $table->dateTime('created_at', 3)->index();
            $table->index(['created_at', 'event_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visitor_events');
    }
};
