<?php

namespace App\Models;

use Database\Factories\ProductFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /** @use HasFactory<ProductFactory> */
    use HasFactory;

    public $incrementing = false;

    protected $keyType = 'string';

    protected $guarded = [];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'discount_value' => 'decimal:2',
            'colors' => 'array',
            'sizes' => 'array',
            'color_images' => 'array',
            'size_guide' => 'array',
            'is_active' => 'boolean',
            'is_featured' => 'boolean',
        ];
    }

    public function sellingPrice(): float
    {
        $price = (float) $this->price;
        $value = (float) $this->discount_value;

        return round(max(0, match ($this->discount_type) {
            'percent' => $price * (1 - $value / 100),
            'fixed' => $price - $value,
            default => $price,
        }), 2);
    }

    public function storePayload(): array
    {
        return [
            'id' => $this->id,
            'catalogCode' => $this->catalog_code,
            'name' => $this->name,
            'price' => $this->sellingPrice(),
            'originalPrice' => (float) $this->price,
            'description' => $this->description ?? '',
            'category' => $this->category,
            'imagePath' => $this->image_path,
            'colorImages' => $this->color_images ?? [],
            'colors' => $this->colors ?? [],
            'sizes' => $this->sizes ?? [],
            'sizeGuide' => $this->size_guide ?? [],
            'fitNote' => $this->fit_note ?? '',
            'active' => $this->is_active,
            'featured' => $this->is_featured,
        ];
    }
}
