<?php

namespace App\Traits;

use Str;

trait Slug
{
    protected function prepareForValidation(): void
    {
        $this->merge([
            'slug' => $this->slug ? Str::slug($this->slug) : Str::slug($this->title)
        ]);
    }
}
