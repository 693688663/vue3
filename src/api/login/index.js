/*
    登录页接口
*/
import { envConfig } from '@/utils/envConfig.js';
import http from '@/utils/request.ts';
const { url } = envConfig()
export function login1(params) {
    return http.get(url + 'queryUserList', params)
}