<?php

namespace App\Models;

use Database\Factories\CatalogPhotoFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CatalogPhoto extends Model
{
    /** @use HasFactory<CatalogPhotoFactory> */
    use HasFactory;

    protected $guarded = [];

    protected function casts(): array
    {
        return ['is_active' => 'boolean'];
    }
}
