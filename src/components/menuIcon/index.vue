<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-24 17:49:02
 * @Description: 菜单路由图标配置
-->
<template>
  <!-- 自定义图标 -->
  <template v-if="img.indexOf('img-') == 0">
    <Icon :style="{ color: 'hotpink' }">
      <template #component>
        <span class="imgIcon" :style="'background-image:url(' + fun.img(img) + ')'"></span>
      </template>
    </Icon>
  </template>
  <!-- 原有图标 -->
  <template v-else>
    <component :is="Icons[img]" />
  </template>
</template>
<script lang="ts" setup>
// 引入
// icons icon组件自定义组件  icons 图标集
import Icon, * as Icons from '@ant-design/icons-vue';
// vue
import { defineProps } from 'vue'
// 参数 
const props = defineProps({ icon: { type: String, default: "" } })
const img = props.icon
// 函数
const fun = {
  img: (img) => {
    let reg = new RegExp("img-", "g")
    let a = "/src/static/img/" + img.replace(reg, "")
    return a
  }
}
// 监听
</script>
<style lang="less" scoped>
.imgIcon {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-size: 100% 100%;
}
</style>