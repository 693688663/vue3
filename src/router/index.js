
import { createRouter, createWebHashHistory } from "vue-router";

const login = () => import('../views/login/index.vue')

const routes = [
    {
        name: 'login',
        path: '/login',
        component: login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router