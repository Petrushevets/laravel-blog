<template>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-primary">
                    <form>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="category-title">Title</label>
                                <input type="text"
                                       id="category-title"
                                       class="form-control"
                                       :class="{ 'is-invalid': errors.hasOwnProperty('title') }"
                                       v-model="category.title"
                                       placeholder="Enter Title">
                                <span v-if="errors.hasOwnProperty('title')"
                                      class="error invalid-feedback">{{ errors.title.toString() }}</span>
                            </div>
                            <div class="form-group">
                                <label for="category-slug">Slug</label>
                                <input type="text"
                                       id="category-slug"
                                       class="form-control"
                                       :class="{ 'is-invalid': errors.hasOwnProperty('slug') }"
                                       v-model="category.slug"
                                       placeholder="Enter Slug">
                                <span v-if="errors.hasOwnProperty('slug')"
                                      class="error invalid-feedback">{{ errors.slug.toString() }}</span>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button @click.prevent="store" type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import {useToast} from "vue-toastification";

const toast = useToast()

export default {
    name: "Create",

    data() {
        return {
            category: {
                title: '',
                slug: ''
            },
            errors: {}
        }
    },

    methods: {
        store() {
            axios.post('/api/categories', this.category)
                .then(() => {
                    toast.success('Category created');
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                })
        }
    }
}
</script>

