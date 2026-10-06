<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => 'model-'.fake()->uuid(),
            'name' => fake()->words(3, true),
            'description' => fake()->sentence(),
            'category' => 'casual',
            'price' => 70,
            'image_path' => '/assets/loafer-clean.webp',
            'colors' => ['أسود', 'بني'],
            'sizes' => [40, 41, 42],
            'is_active' => true,
            'is_featured' => false,
            'sort_order' => 0,
        ];
    }
}
