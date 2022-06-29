<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-29 13:14:32
 * @Description: 文件介绍
-->

<template>
  <div>
    <search />
    <!-- <list /> -->
  </div>
</template>
<script lang="ts" setup>
import search from './components/search.vue'
import list from './components/list.vue'
import { provide, inject, ref, reactive, } from 'vue'
const info = reactive({
  search: 1,
  list: 1,
})
provide("info", info)


</script>
<style lang="less" scoped>
</style>