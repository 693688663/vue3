<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-24 17:55:22
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
        <a-menu mode="inline" theme="light">
          <meunSub :menuList="menuList" />
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header theme="light">Header</a-layout-header>
        <a-layout-content theme="light">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
// 引入资源

// vue  
import { ref, reactive } from 'vue'
// 菜单封装
import meunSub from '@/components/meunSub/index.vue'
// 菜单列表
import { menuList } from "@/router/home/allMenu"
// 数据
// 是否收起左侧菜单 
const collapsed = ref<Boolean>(false)
//  函数
const fun = {
}

</script>
<style lang="less" scoped>
.ant-layout-has-sider {
  height: 100%;

  .ant-layout-sider {
    background: #fff;
  }
}

// /deep/ .ant-menu-item {
//   // background: rgb(250, 255, 255);
// }
/deep/ .ant-menu-item {
  background: red;
}

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