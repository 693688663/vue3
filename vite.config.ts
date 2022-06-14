/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-14 11:09:36
 * @Description: 文件介绍
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
})

