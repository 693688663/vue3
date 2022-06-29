<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-29 10:01:52
 * @Description: 主页
-->
<template>
  <div>
    <!-- theme="light" -->
    <!-- theme="dark" -->
    <a-layout theme="light">
      <a-layout-sider v-model:collapsed="collapsed" collapsible theme="light">
        <div class="logo">
          dingding
        </div>
        <a-menu mode="inline" theme="light" :openKeys="openKeys" :selectedKeys="selectedKeys"
          @click="fun.clickMenuItem">
          <!-- :inline-collapsed="collapsed" -->
          <MeunSub :menuList="menuList" />
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header theme="light">Header</a-layout-header>
        <a-layout-content theme="light">
          <!-- <keep-alive> -->
          <router-view> </router-view>
          <!-- </keep-alive> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
// 引入资源

// vue  
import { ref, reactive, watch } from 'vue'
// 菜单封装
import MeunSub from '@/components/meunSub/index.vue'
// 菜单列表
import { menuList } from "@/router/home/allMenu"
import { useRouter, useRoute } from "vue-router";
const router = useRouter()
const route: any = useRoute()
// console.log(route.fullPath)
// console.log(list)
// 数据
// 是否收起左侧菜单 
const collapsed = ref<Boolean>(false)
// 展开的菜单
const openKeys = ref<String[]>([])
// 选中的菜单
const selectedKeys = ref<String[]>([])
//  函数
const fun = {
  // 菜单选择时展示不同菜单
  clickMenuItem: ({ item, key, keyPath }) => {
    openKeys.value = keyPath
    selectedKeys.value = keyPath
  },
  // 初始时设置展开的菜单
  setKeyPath: () => {
    let routeKey = route.meta.key || ""
    let list = routeKey.split('-')
    let keyPath: String[] = []
    for (let i = 0; i < list.length; i++) {
      if (i == 0) {
        keyPath[i] = list[i]
        continue
      }
      keyPath[i] = keyPath[i - 1] + "-" + list[i]
    }
    openKeys.value = keyPath
    selectedKeys.value = keyPath
  }
}
// 监听路由变化
watch(() => route.fullPath, () => {
  fun.setKeyPath()
}, {
  deep: true,
  immediate: true
})
</script>
<style lang="less" scoped>
.ant-layout-has-sider {
  height: 100%;

  .ant-layout-sider {
    background: #fff;
  }
}

// :deep(.ant-menu-item) {
//   background: red;
// }

.logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
}

.imgIcon {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-size: 100% 100%;
}
</style>