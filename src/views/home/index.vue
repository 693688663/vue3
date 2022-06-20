<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-16 18:07:47
 * @Description: 主页
-->
<template>
  <div>
    <a-layout>
      <a-layout-sider v-model:collapsed="collapsed" collapsible>
        <div style="height:64px">
          dingding
        </div>
        <a-menu theme="dark" mode="inline">
          <a-menu-item key="1">
            <pie-chart-outlined />
            <span>Option 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <desktop-outlined />
            <span>Option 2</span>
          </a-menu-item>
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                <span>User</span>
              </span>
            </template>
            <a-menu-item key="3">Tom</a-menu-item>
            <a-menu-item key="4">Bill</a-menu-item>
            <a-menu-item key="5">Alex</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <team-outlined />
                <span>Team</span>
              </span>
            </template>
            <a-menu-item key="6">Team 1</a-menu-item>
            <a-menu-item key="8">Team 2</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="9">
            <file-outlined />
            <span>File</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header>Header</a-layout-header>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts" setup>
// 引入资源
// vue  
import { ref, reactive } from 'vue'
// vue-icon
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';

// 数据 

// 是否收起左侧菜单
const collapsed = ref<Boolean>(false)


</script>

<style lang="less" scoped>
.ant-layout-has-sider {
  height: 100%;

  .ant-layout-sider {
    background: #1d2755;
  }
}
</style>