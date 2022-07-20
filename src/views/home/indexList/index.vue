<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-07-20 11:30:39
 * @Description: 文件介绍
-->

<template>
  <div>
    <search />
    <!-- <list /> -->
  </div>
</template>
<script lang="ts" setup>
import { onlyId } from "@/static/js/index.js";
// import search from "./components/search.vue";
// import list from "./components/list.vue";
import { provide, inject, ref, reactive } from "vue";
// const info = reactive({
//   search: 1,
//   list: 1,
// })

const data:any = {
  search: reactive({}),
  list: reactive({}),
  modal: reactive({}),
  query: ref(0),
};
// 修改数据
const setData:any = (name, params = {}) => {
  if (name == "query") {
    data.query.value = onlyId();
    return;
  }
  Object.keys(params).map((item) => {
    data[name][item] = params[item];
  });
};
provide("info", { data, setData });
</script>
<style lang="less" scoped></style>
