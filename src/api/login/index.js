/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-15 16:37:01
 * @Description: 文件介绍
 */
/*
    登录页接口
*/
import { envConfig } from '@/utils/envConfig.js';
import http from '@/utils/request.ts'
const { url,local } = envConfig()
export function login1(params) {
    return http.post(local + '/login', params)
}