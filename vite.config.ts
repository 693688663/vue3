/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-15 13:59:53
 * @Description: 文件介绍
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");


export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: { // 本地开发环境通过代理实现跨域
      // 正则表达式写法
      '/api': {
        target: 'http://10.249.4.107:3000', // 后端服务实际地址
        // rewrite: (path) => path.replace(/^\/api/, ''),
        changeOrigin: true, //开启代理
      }
    }
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
})

