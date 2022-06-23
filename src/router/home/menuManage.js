/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-23 14:53:34
 * @Description: 菜单管理
 * showType true 表示需要在菜单中展示的菜单
 */

// 所有的菜单路由
export const allMenu = [
  {
    showType: true,
    path: '/indexList',
    meta: {
      title: "查询表格测试",
      icon: "icon-a-gray10",
    },
    component: () => import('@/views/home/indexList/index.vue')
  },
  {
    showType: true,
    path: '/indexListMsg',
    component: () => import('@/views/home/indexListMsg/index.vue')
  }
]
