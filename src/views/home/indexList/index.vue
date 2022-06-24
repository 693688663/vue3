<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-24 18:13:55
 * @Description: 文件介绍
-->

<template>
  <div>
    <search />
    <list />
  </div>
</template>
<script lang="ts" setup>
import search from './components/search.vue'
import list from './components/list.vue'
import * as store from './index.store.js'

import { provide, inject, ref, reactive } from 'vue'
Object.keys(store).map((item) => {
  provide(item, store[item])
})

</script>
<style lang="less" scoped>
</style>