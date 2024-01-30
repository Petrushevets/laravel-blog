<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @return void
     */
    public function test_index()
    {
        $user = User::factory()->create();
        Category::factory()->create();

        $this->actingAs($user)->json('get', '/api/categories')
            ->assertOk()
            ->assertJsonStructure(
                [
                    'data' => [
                        [
                            'id',
                            'title',
                            'slug',
                        ]
                    ]
                ]
            );
    }

    /**
     * @return void
     */
    public function test_store()
    {
        $user = User::factory()->create();
        $category = Category::factory()->make();

        $this->actingAs($user)->json('post', '/api/categories', $category->toArray())
            ->assertCreated()
            ->assertJsonStructure(
                [
                    'data' => [
                        'id',
                        'title',
                        'slug',
                    ]
                ]
            );

        $this->assertDatabaseHas('categories', $category->toArray());
    }
}
