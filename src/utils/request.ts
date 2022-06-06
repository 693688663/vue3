import axios from 'axios';
import moment from 'moment'
import { getEnv } from './envConfig.js'
import { message, Modal } from 'ant-design-vue';
const url = "https://www.fastmock.site/mock/9d721f8600395e27eebc0388281d1826/starship-dbass"
const token = ""
// 基本信息配置
const service = axios.create({
    baseURL: url,
    timeout: 1000 * 10,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': "*"
    }
})
let getHeader = function (url: String) {
    let timestamp = moment().format('YYYY-MM-DD hh:mm:ss')
    let token = sessionStorage.getItem("token") || ""
    let source = "web"
    // let sign = md5(source + url + code + timestamp + token)
    let sign = source + url + + timestamp + token
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
        let title = "请求接口"
        let configUrl = config.url
        let data = config.params || config.data
        console.log(title, configUrl, data)
        let baseURL = config.baseURL
        let url = config.url?.replace(baseURL || "", '') || ""
        config.headers = getHeader(url)
        return config;
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
// post请求
let post = function (url: String, params: Object) {
    return request(url, params, 'post')
}
// get请求
let get = function (url: String, params: Object) {
    return request(url, params, 'get')
}
// 发出请求
let request = function (url: String, params: Object, type: any) {
    let data = {}
    if (type == "get") {
        data = {
            'params': params
        }
    }
    else {
        data = params
    }
    const resData = {
        loading: false,
        data: {},
        error: null
    }
    return new Promise((resolve) => {
        service[type](url, data)
            .then(
                (res: {}) => {
                    console.log(res)
                    resData.data = parametSorting(res);
                }
            )
            .catch(
                (error: null) => {
                    resData.error = error
                }
            )
            .finally(() => {
                resData.loading = false
                resolve(resData)
            })
    })
}
// 参数整理
let parametSorting = function (paramet) {
    return paramet.data.data

}
let http = {
    post,
    get
}
export default http;