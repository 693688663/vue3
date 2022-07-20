<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-07-20 13:35:44
 * @Description: 文件介绍
-->
<template>
  <div></div>
</template>
<script lang="ts" setup>
import { inject, watch, onMounted, reactive, onErrorCaptured } from "vue";
const {
  data: { search, query },
  setData,
}: any = inject("info");
const fun = {
  // add: () => {
  //   info.search += 1;
  //   qwe.q1 += 1;
  //   console.log("集中", info);
  //   console.log("内部", qwe);
  // },
  // see: () => {
  //   console.log("集中", info);
  //   console.log("内部", qwe);
  // },
};
// watch(info, (newData) => {
//   console.log('search')
//   console.log(info)
// }, {
//   deep: true,
//   immediate: true
// })
</script>
