import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "./views/admin/Dashboard.vue";
import Registration from "./views/auth/Registration.vue";

const routes = [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: {
            activeClass: "active",
            pageTitle: 'Dashboard'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Registration,
        meta: {
            layout: 'Registration'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
