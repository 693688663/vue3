import axios from 'axios';
import moment from 'moment'
import { getEnv } from './envConfig.js'
import { message, Modal } from 'ant-design-vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter(), route = useRoute();
// console.log("this")
// console.log(this)
/*
    axios封装：axios信息配置及导出封装后的模块使用
    请求方式封装：get  post
    请求拦截：请求拦截  响应拦截
*/

// 创建服务
const service = axios.create({
  // baseURL: url,
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': "*"
  }
})
// header信息整理
let getHeader = function (url: String) {
  let timestamp = moment().format('YYYY-MM-DD hh:mm:ss')
  let token = sessionStorage.getItem("token") || ""
  let source = "web"
  // let sign = md5(source + url + code + timestamp + token)
  let sign = source + "-" + url + "-" + timestamp + "-" + token
  return {
    'Content-Type': 'application/json; charset=UTF-8; application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': "*",
    'token': token,
    'timestamp': timestamp,
    'sign': sign,
    'source': source,
  };
}
// 请求拦截
service.interceptors.request.use(
  config => {
    console.log("config")
    console.log(config)
    let title = "请求接口"
    console.log(title, JSON.stringify(config.url), config.params || config.data)

    let baseURL = config.baseURL
    let url = config.url?.replace(baseURL || "", '') || ""
    config.headers = getHeader(url)
    // 接口发出拦截
    if (config.headers.token == "") {
      window.location.hash = "/login"
      return
    }
    return config;
  }, err => {
    // return 1234;
    return Promise.reject(err);
    // return Promise.reject(err);
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    let title = ""
    let configUrl = response.config.url
    let data = response.data
    if (response.status == 200) {
      title = "请求成功"
    } else {
      title = "请求失败"
    }
    console.log(title, configUrl, data)
    return response
  },
  error => {
    return Promise.reject(error);
  }
)

// 发出请求
let request = function (url: String, params: Object, type: any) {
  // 根据请求方式整理参数
  let paramsData = {}
  switch (type) {
    case 'get':
      paramsData = {
        'params': params
      }
      break;
    case 'post':
      paramsData = params
      break;
    default: ;

  }
  // 返回参数预设
  const resData = {
    loading: false,
    error: null
  }
  let outParams = {}
  return new Promise((resolve) => {
    service[type](url, paramsData)
      .then(
        (res: {}) => {
          outParams = {
            ...resData,
            ...(parametSorting(res))
          };
        }
      )
      .catch((error: any) => {
        outParams = {
          ...resData,
          error
        }
      })
      .finally(() => {
        resolve(outParams)
      })
  })
}

// 参数整理
let parametSorting = function (paramet) {
  return paramet.data
}
// post请求
let post = function (url: String, params: Object) {
  return request(url, params, 'post')
}
// get请求
let get = function (url: String, params: Object) {
  return request(url, params, 'get')
}
let http = {
  post,
  get
}
export default http;