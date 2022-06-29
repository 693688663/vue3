<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-29 18:00:38
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
          <div>
            <a-tabs type="editable-card" hide-add @edit="fun.onEdit" @change="fun.tabChange" :activeKey="activeKey">
              <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title">
                <!-- {{ pane.content }} -->
              </a-tab-pane>
            </a-tabs>
          </div>
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

// 数据
// 是否收起左侧菜单 
const collapsed = ref<Boolean>(false)
// 展开的菜单
const openKeys = ref<String[]>([])
// 选中的菜单
const selectedKeys = ref<String[]>([])
// 横向菜单列表
const panes = ref<any>([])
// 当前菜单
const activeKey = ref('')

//  函数
const fun = {
  // 菜单选择：展示不同的菜单
  clickMenuItem: ({ item, key, keyPath }) => {
    openKeys.value = keyPath
    selectedKeys.value = keyPath
  },
  // 监听路由变化
  setKeyPath: () => {

    // 设置左侧菜单数据
    let routeKey = route.meta.key || ""
    if (!routeKey) return;
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

    // 设置头部菜单数据
    if (panes.value.length == 0) {
      panes.value.push({
        path: route.fullPath,
        title: route.meta.title,
        key: route.meta.key
      })
    }
    for (let i = 0; i < panes.value.length; i++) {
      let item = panes.value[i]
      if (item.key == route.meta.key) {
        break
      }
      if (i == panes.value.length - 1) {
        panes.value.push({
          path: route.fullPath,
          title: route.meta.title,
          key: route.meta.key
        })
      }
    }

    // 改变默认菜单
    activeKey.value = route.meta.key

  },

  // 头部菜单关闭
  onEdit: (targetKey) => {

    // 有一个菜单时
    // 清空头部菜单 跳转主页
    if (panes.value.length == 1) {
      panes.value = []
      router.push('/home')
      return
    }

    // 有多个菜单时
    // 删除当前菜单
    // 删除选中的菜单时则进入前一个菜单
    // 删除未选中的菜单时则只删除菜单
    let arr: any = []
    let num = 0
    for (let i = 0; i < panes.value.length; i++) {
      let item = panes.value[i]
      if (panes.value[i].key == targetKey) {
        num = i
        continue
      }
      arr.push(panes.value[i])
    }
    if (targetKey == route.meta.key) {
      if (num == 0) {
        router.push(panes.value[num + 1].path)
      } else {
        router.push(panes.value[num - 1].path)
      }
    }
    panes.value = arr
  },

  // 头部菜单切换
  tabChange: (activeKey) => {
    for (let i = 0; i < panes.value.length; i++) {
      if (panes.value[i].key == activeKey) {
        router.push(panes.value[i].path)
        break;
      }
    }
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