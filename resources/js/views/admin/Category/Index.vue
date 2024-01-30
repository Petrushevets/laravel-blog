<template>
    <section class="content">
        <router-link class="btn btn-block btn-primary mb-3 col-1" :to="{ name: 'admin.category.create' }">
            Add
        </router-link>
        <div class="card">
            <div class="card-body p-0">
                <table class="table table-striped projects">
                    <thead>
                    <tr>
                        <th style="width: 1%">
                            #
                        </th>
                        <th style="width: 20%">
                            Title
                        </th>
                        <th style="width: 20%">
                            Slug
                        </th>
                        <th style="width: 20%"></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="category in categories">
                        <td>
                            {{ category.id }}
                        </td>
                        <td>
                            {{ category.title }}
                        </td>
                        <td>
                            {{ category.slug }}
                        </td>
                        <td class="project-actions text-right">
                            <router-link class="btn btn-info btn-sm"
                                         :to="{ name: 'admin.category.edit', params: { id: category.id }}">
                                <i class="fas fa-pencil-alt"></i>
                                Edit
                            </router-link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    name: "Index",

    mounted() {
        this.getCategories()
    },

    data() {
        return {
            categories: null
        }
    },

    methods: {
        getCategories() {
            axios.get('/api/categories')
                .then(({data: categories}) => {
                    this.categories = categories.data
                });
        }
    }
}
</script>
