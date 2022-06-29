/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-29 15:23:31
 * @Description: 路由配置及路由拦截
 * 菜单路由有有几种配置
 * 1.有多层的权限配置 1.2.3.4.5··· 默认无权限
 * 2.是否在菜单中展示 展示 true  不展示 false
 * 3.主路由有登录页  主页 404  
 * 4.菜单路由主要展示菜单
 * 5.菜单是否需要缓存
 * 6.要有理想开发模式不让网络形象开发
 */
// vue-router
import { createRouter, createWebHashHistory } from "vue-router";
import { routerList } from "@/router/home/allMenu"
// 路由配置
const routes = [
    {
        path: '/login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: () => import('../views/home/index.vue'),
        children: routerList
    },
    {
        path: "/404",
        component: () => import('../views/404/index.vue')
    },
]
// 创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
// 路由拦截
router.beforeEach((to, from, next) => {
    // console.log('to', to)
    // console.log('from', from)
    // if (to.path === '/login') return next();
    // const token = window.sessionStorage.getItem('token')
    // if (!token) return next('/login')
    next()
})
export default router