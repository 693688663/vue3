<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-28 11:18:54
 * @Description: 文件介绍
-->
<template>
  <div>
    <a-button v-code="12" @click="fun.add">search加一</a-button>
    <a-button  v-code:name="123" @click="fun.see">查看</a-button>
    <span>集中：{{ info.search }}</span>
    <span>内部：{{ qwe.q1 }}</span>
  </div>
</template>
<script lang="ts" setup>
import { inject, watch, onMounted, reactive, onErrorCaptured } from 'vue'
// console.log(config.errorHandler )
const qwe = reactive({
  q1: 1
})
let info: any = inject('info')
// onMounted(() => {
//   console.log('info')
//   console.log(info)
//   console.log(qwe)
// })
const fun = {
  add: () => {
    info.search += 1
    qwe.q1 += 1
    console.log("集中", info)
    console.log("内部", qwe)
  },
  see: () => {
    console.log("集中", info)
    console.log("内部", qwe)
  }
}
// watch(info, (newData) => {
//   console.log('search')
//   console.log(info)
// }, {
//   deep: true,
//   immediate: true
// })
</script>
