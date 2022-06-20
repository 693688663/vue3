/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-20 10:12:25
 * @Description: 路由配置及路由拦截
 * 菜单路由有有几种配置
 * 1.有多层的权限配置 1.2.3.4.5···
 * 2.是否在菜单中展示
 * 3.主路由有登录页  主页 404  
 * 4.菜单路由主要展示菜单
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// vue-router
import { createRouter, createWebHashHistory } from "vue-router";

// 路由配置
const routes = [
    {
        name: 'login',
        path: '/login',
        meta: { title: "登录" },
        component: () => import('../views/login/index.vue')
    },
    {
        path: "/",
        redirect: "/home",
        // meta: { title: "主页" },
    },
    {
        name: 'home',
        path: "/home",
        component: () => import('../views/home/index.vue')
        // meta: { title: "主页" },
    },
]
// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
// 路由拦截
router.beforeEach((to, from) => {
    console.log('to', to)
    console.log('from', from)
    // return false
})
export default router