/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-27 17:32:34
 * @Description: 文件介绍
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import { useRouter, useRoute } from 'vue-router';
// import vueRouter from 'vue-router';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import mixins from '@/components/mixins/index.js'


const app = createApp(App)
app.use(router)
// app.use(vueRouter)
app.use(Antd)
app.mixin(mixins)
app.mount('#app')
