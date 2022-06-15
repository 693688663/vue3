/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-14 17:29:59
 * @Description: 文件介绍
 */

import { createRouter, createWebHashHistory } from "vue-router";

const login = () => import('../views/login/index.vue')

const routes = [
    {
        name: 'login',
        path: '/',
        component: login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router