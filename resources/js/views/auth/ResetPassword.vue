<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <div class="h1"><b>Admin</b>LTE</div>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">
                        You are only one step a way from your new password, recover your password now.
                    </p>
                    <form>
                        <div class="input-group mb-3">
                            <input v-model="form.email" type="email" class="form-control"
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
                            <input v-model="form.password" type="password" class="form-control"
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
                            <input v-model="form.password_confirmation" type="password" class="form-control"
                                   placeholder="Confirm Password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button @click.prevent="resetPassword" type="submit" class="btn btn-primary btn-block">
                                    Change password
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
            form: {
                email: null,
                password_confirmation: null,
                password: null,
                token: null,
            },
            errors: {},
        }
    },

    mounted() {
        this.setEmail();
        this.setToken();
    },

    methods: {
        resetPassword() {
            axios.get('/sanctum/csrf-cookie').then(() => {
                axios.post('/password/reset', this.form)
                    .then(response => {
                        this.$router.push({
                            name: 'login',
                            query: {
                                message: response.data.message
                            }
                        });
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data.errors;
                        }
                    })
            });
        },

        setEmail() {
            this.form.email = this.$route.query.email
        },

        setToken() {
            this.form.token = this.$route.params.token;
        }
    }
}
</script>
