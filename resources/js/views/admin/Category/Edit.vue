<template>
    <section class="content">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-primary">
                    <form>
                        <div class="card-body">
                            <div class="form-group">
                                <label for="post-title">Title</label>
                                <input type="text"
                                       id="post-title"
                                       class="form-control"
                                       :class="{ 'is-invalid': errors.hasOwnProperty('title') }"
                                       v-model="category.title"
                                       placeholder="Enter Title">
                                <span v-if="errors.hasOwnProperty('title')"
                                      class="error invalid-feedback">{{ errors.title.toString() }}</span>
                            </div>
                            <div class="form-group">
                                <label for="post-slug">Slug</label>
                                <input type="text"
                                       id="post-slug"
                                       class="form-control"
                                       :class="{ 'is-invalid': errors.hasOwnProperty('slug') }"
                                       v-model="category.slug"
                                       placeholder="Enter Slug">
                                <span v-if="errors.hasOwnProperty('slug')"
                                      class="error invalid-feedback">{{ errors.slug.toString() }}</span>
                            </div>
                        </div>
                        <div class="card-footer">
                            <button @click.prevent="update" type="submit" class="btn btn-primary">Update</button>
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

    mounted() {
        this.getCategory();
    },

    methods: {
        getCategory() {
            axios.get(`/api/categories/${this.$route.params.id}`).then(({data: category}) => {
                this.category.title = category.data.title
                this.category.slug = category.data.slug

                this.setPadeTitle();
            })
        },

        update() {
            axios.patch(`/api/categories/${this.$route.params.id}`, this.category)
                .then(() => {
                    toast.success('Category updated');
                    this.setPadeTitle();
                })
                .catch(error => {
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                })
        },

        setPadeTitle() {
            window.document.getElementById('page-title').textContent = this.$route.meta.pageTitle + this.category.title
        },
    }
}
</script>

