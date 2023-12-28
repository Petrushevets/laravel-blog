<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <div class="h1"><b>Admin</b>LTE</div>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Sign in to start your session</p>
                    <form class="mb-2">
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
                        <div class="input-group mb-3">
                            <input v-model="password" type="password" class="form-control"
                                   :class="{ 'is-invalid': errors.hasOwnProperty('password') }" placeholder="Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                            <span v-if="errors.hasOwnProperty('password')" class="error invalid-feedback">
                                {{ errors.password.toString() }}
                            </span>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button @click.prevent="login" type="submit" class="btn btn-primary btn-block">
                                    Sign In
                                </button>
                            </div>
                        </div>
                    </form>
                    <p class="mb-1">
                        <a href="#">I forgot my password</a>
                    </p>
                    <p class="mb-0">
                        <router-link class="text-center" to="/register">Register a new membership</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
            errors: {},
        }
    },

    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post('/login', {email: this.email, password: this.password})
                    .then(response => {
                        localStorage.setItem('xsrf_token', response.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({name: 'admin.dashboard'})
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
