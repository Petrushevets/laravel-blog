import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "./views/admin/Dashboard.vue";

const routes = [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: {
            activeClass: "active",
            pageTitle: 'Dashboard'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router
