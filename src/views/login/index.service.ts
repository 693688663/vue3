/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-20 16:38:55
 * @Description: 登录页接口
 */
import http from '@/utils/request'
import { envConfig } from '@/utils/envConfig';
const {
  url,//正常环境的IP地址
  mock//开发mock环境的ip地址
} = envConfig()
import * as Interface from '@/interface'

// 登录-登录
export function login(params: Interface.loginParams) {
  return http.post(url + "/login", params)
}