<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-28 17:10:38
 * @Description: 子菜单递归循环
-->
<template>

  <template v-for=" item  in menuList" :key="item.meta.key">
    <!-- 没有子路由 -->
    <a-menu-item v-if="!item.children || item.children.length == 0" :key="item.meta.key">
      <menu-icon v-if="item.meta.icon" :icon="item.meta.icon" />
      <span>
        <router-link :to="item.path">
          {{ item.meta.title }}
        </router-link>
      </span>
    </a-menu-item>
    <!-- 有子路由 -->
    <template v-else>
      <a-sub-menu :key="item.meta.key">
        <template #title>
          <menu-icon v-if="item.meta.icon" :icon="item.meta.icon" />
          <span>
            {{ item.meta.title }}
          </span>
        </template>
        <meunSub :menuList="item.children" />
      </a-sub-menu>
    </template>
  </template>

</template>

<script lang="ts" setup>
// vue
import { defineProps } from 'vue'
// 菜单图标
import MenuIcon from '@/components/menuIcon/index.vue'
// 菜单封装 这里应用为递归解决多层菜单问题
import meunSub from '@/components/meunSub/index.vue'
// 参数 
const props = defineProps({ menuList: { type: Array, default: [] } })
const menuList: any = props.menuList

</script>
<style lang="less" scoped>
</style>