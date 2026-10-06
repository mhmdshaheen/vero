<?php

namespace Database\Factories;

use App\Models\Order;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => 'VR-'.strtoupper(fake()->unique()->bothify('????????')),
            'customer_name' => fake()->name(),
            'phone' => '031234567',
            'area' => 'بيروت',
            'address' => 'شارع رئيسي مبنى 12',
            'items' => [],
            'total_usd' => 0,
            'status' => 'new',
        ];
    }
}
