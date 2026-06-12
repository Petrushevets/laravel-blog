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
     * @var User
     */
    private User $user;

    /**
     * This method is called before each test
     *
     * @return void
     */
    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create();
    }

    /**
     * @return void
     */
    public function test_index()
    {
        Category::factory()->create();

        $this->actingAs($this->user)->json('get', '/api/categories')
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
        $category = Category::factory()->make();

        $this->actingAs($this->user)->json('post', '/api/categories', $category->toArray())
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

    /**
     * @return void
     */
    public function test_delete()
    {
        $category = Category::factory()->create();

        $this->actingAs($this->user)->json('delete', "/api/categories/$category->id")
            ->assertNoContent();
        $this->assertDatabaseMissing('categories', $category->toArray());
    }
}
