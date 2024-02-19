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
                            <router-link class="btn btn-info btn-sm mr-1"
                                         :to="{ name: 'admin.category.edit', params: { id: category.id }}">
                                <i class="fas fa-pencil-alt"></i>
                                Edit
                            </router-link>
                            <button @click="openModal(category)" class="btn btn-danger btn-sm">
                                <i class="fas fa-trash"></i>
                                Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Modal ref="modal"/>
    </section>
</template>

<script>
import axios from "axios";
import Modal from "../../../components/admin/Modal.vue";
import {useToast} from "vue-toastification";

const toast = useToast()

export default {
    name: "Index",
    components: {Modal},

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
        },

        openModal(category) {
            const title = 'Warning';
            const content = `This will permanently delete category ${category.title}. Continue?`;
            const button = {
                label: "Delete",
                class: "btn-danger",
                action: () => this.deleteCategory(category.id)
            };

            this.$refs.modal.openModal({title, content, button});
        },

        deleteCategory(id) {
            console.log(id)
            axios.delete(`/api/categories/${id}`)
                .then(() => {
                    this.getCategories()
                    this.$refs.modal.handleCancel();
                    toast.success('Category deleted');
                })
        }
    }
}
</script>
