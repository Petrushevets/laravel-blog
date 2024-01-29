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
                .then(response => {
                    this.categories = response.data.data
                });
        }
    }
}
</script>
