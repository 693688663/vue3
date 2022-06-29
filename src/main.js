/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-28 13:53:26
 * @Description: 文件介绍
 */
// vue
import { createApp } from 'vue';
// antdv
import Antd from 'ant-design-vue';
// app
import App from './App.vue';
// router
import router from './router';
// antdvcss
import 'ant-design-vue/dist/antd.css';
// mixin
import mixins from '@/components/mixins/index.js'

// 创建app
const app = createApp(App)
// 使用路由
app.use(router)
// 使用ui
app.use(Antd)
// 使用混入
app.mixin(mixins)
// 获取app
app.mount('#app')
