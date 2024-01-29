import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from "./views/admin/Dashboard.vue";
import Registration from "./views/auth/Registration.vue";
import Login from "./views/auth/Login.vue";
import PageNotFound from "./views/admin/PageNotFound.vue";
import ForgotPassword from "./views/auth/ForgotPassword.vue";
import ResetPassword from "./views/auth/ResetPassword.vue";
import CategoryIndex from "./views/admin/Category/Index.vue";
import CategoryCreate from "./views/admin/Category/Create.vue";

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
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            layout: 'Login'
        }
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: ForgotPassword,
        meta: {
            layout: 'ForgotPassword'
        }
    },
    {
        path: '/password/reset/:token',
        name: 'password.reset',
        component: ResetPassword,
        meta: {
            layout: 'ResetPassword'
        }
    },
    {
        path: '/admin/category',
        name: 'admin.category.index',
        component: CategoryIndex,
        meta: {
            pageTitle: 'Categories'
        }
    },
    {
        path: '/admin/category/create',
        name: 'admin.category.create',
        component: CategoryCreate,
        meta: {
            pageTitle: 'Create a Category'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
        meta: {
            layout: 'PageNotFound'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('xsrf_token');

    if (!token) {
        if (to.name === 'login' || to.name === 'register') {
            return next()
        } else if (to.name === 'admin.dashboard') {
            return next({
                name: 'login'
            })
        }
    }

    if (to.name === 'login' || to.name === 'register') {
        return next({
            name: 'admin.dashboard'
        })
    }

    next()
})

export default router
