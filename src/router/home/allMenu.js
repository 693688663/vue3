/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-24 17:06:23
 * @Description: 菜单管理
 * showType true 表示需要在菜单中展示的菜单
 * 菜单图标规则 
 * 组件图标：直接设置名称
 * 图片图标：在文件名称墙加上  img-
 * 其他图标同上 功能未做，但留有提升空间
 */
// 整理路由 

// 封装的js函数库
import { setRouter } from "@/static/js/index.js"

// 所有的菜单路由
export const menuAll = [
  {
    showType: true,
    path: '/q1',
    meta: {
      title: "q1",
      icon: "DashboardOutlined",
    },
    component: () => import('@/views/home/indexList/index.vue')
  },
  {
    showType: true,
    path: '/q2',
    meta: {
      title: "q2",
      // icon: "img-123.png",
    },
    component: () => import('@/views/home/indexListMsg/index.vue')
  },
  {
    showType: true,
    path: '/q3',
    meta: {
      title: "q3",
      icon: "img-123.png",
    },
    component: () => import('@/views/home/vue/index.vue'),
    children: [
      {
        showType: true,
        path: '/q3/q4',
        meta: {
          title: "q4",
          icon: "DashboardOutlined",
        },
        component: () => import('@/views/home/vue1/index.vue'),
      },
      {
        showType: true,
        path: '/q3/q5',
        meta: {
          title: "q5",
          icon: "DashboardOutlined",
        },
        component: () => import('@/views/home/vue2/index.vue'),
      },

    ]
  }
]
// 菜单路由 
export const menuList = setRouter(menuAll)