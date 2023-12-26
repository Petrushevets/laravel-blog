<template>
    <div class="hold-transition register-page">
        <div class="register-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <div class="h1"><b>Admin</b>LTE</div>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Register a new membership</p>
                    <form class="mb-2">
                        <div class="input-group mb-3">
                            <input v-model="name" type="text" class="form-control"
                                   :class="{ 'is-invalid': errors.hasOwnProperty('name') }" placeholder="Full name">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                            <span v-if="errors.hasOwnProperty('name')" class="error invalid-feedback">
                                {{ errors.name.toString() }}
                            </span>
                        </div>
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
                        <div class="input-group mb-3">
                            <input v-model="password_confirmation" type="password" class="form-control"
                                   :class="{ 'is-invalid': errors.hasOwnProperty('password_confirmation') }"
                                   placeholder="Retype password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                            <span v-if="errors.hasOwnProperty('password_confirmation')" class="error invalid-feedback">
                                {{ errors.password_confirmation.toString() }}
                            </span>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button @click.prevent="register" type="submit" class="btn btn-primary btn-block">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                    <a class="text-center" href="#">I already have a membership</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Registration",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            errors: {},
        }
    },

    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
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
        }
    }
}
</script>
