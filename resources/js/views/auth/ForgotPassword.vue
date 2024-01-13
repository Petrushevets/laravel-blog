<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <div class="h1"><b>Admin</b>LTE</div>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                    <p v-if="message" class="login-box-msg text-success fs-4">{{ message }}</p>
                    <form>
                        <div class="input-group mb-3">
                            <input v-model="email" type="email" class="form-control"
                                   :class="{ 'is-invalid': errors.hasOwnProperty('email') }" placeholder="Email">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-envelope"></span>
                                </div>
                            </div>
                            <span v-if="errors.hasOwnProperty('email')" class="error invalid-feedback">
                                {{ errors.email.toString() }}
                            </span>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button @click.prevent="forgotPassword" type="submit" class="btn btn-primary btn-block">
                                    Request new password
                                </button>
                            </div>
                        </div>
                    </form>
                    <p class="mt-3 mb-1">
                        <router-link to="/login">Login</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ForgotPassword",

    data() {
        return {
            email: null,
            message: null,
            errors: {},
        }
    },

    methods: {
        forgotPassword() {
            axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post('/password/email', {email: this.email})
                    .then(response => {
                        this.message = response.data.message;
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data.errors;
                        }
                    })
            });
        },
    }
}
</script>
