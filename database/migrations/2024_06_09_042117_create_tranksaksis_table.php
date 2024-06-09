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
        Schema::create('tranksaksis', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id');
            $table->integer('harga');
            $table->integer('qty');
            $table->integer('subtotal');
            $table->enum('type',['takeaway','dine-in']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tranksaksis');
    }
};
