<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-27 17:05:25
 * @Description: 文件介绍
-->
<template>
  <div>
    <a-button @click="fun.add">search加一</a-button>
    <span>{{ info.search }}</span>
  </div>
</template>
<script lang="ts" setup>
import { inject, watch, onMounted, onErrorCaptured } from 'vue'
// console.log(config.errorHandler )
let info: any = inject('info')
// onMounted((q1, q2, q3) => {
//   console.log(q1)
//   console.log(q2)
//   console.log(q3)
// // })
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
