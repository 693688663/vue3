<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-24 18:21:10
 * @Description: 文件介绍
-->
<template>
  <div>
    <a-button @click="fun.add">search加一</a-button>
    <span>{{ info.search }}</span>
  </div>
</template>
<script lang="ts" setup>
import { inject, watch } from 'vue'
let info: any = inject('info')
const fun = {
  add: () => {
    info.list += 1
    // console.log(info)
  }
}
watch(info, (newData) => {
  console.log('search')
  console.log(info)
}, {
  deep: true,
  immediate: true
})
</script>
