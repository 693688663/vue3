/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-17 14:27:06
 * @Description: 文件介绍
 */
/*
    登录页接口
*/
import { envConfig } from '@/utils/envConfig.js';
import http from '@/utils/request'
const { url, local, mock } = envConfig()

// 登录
export function login1(params: Object) {
    return http.post(mock + 'login', params)
}