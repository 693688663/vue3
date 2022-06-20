/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-16 14:59:45
 * @Description: 文件介绍
 */
/*
    环境配置
    不同环境返回不同的ip地址信息
*/


// 判断环境
// 根据地址栏url判断环境
export function getEnv() {
    const url = location.href.toLocaleLowerCase(); //地址栏url
    let env = "dev";
    // 本地环境
    if (/localhost/.test(url)) {
        env = "local";
    }
    // 开发环境
    if (/10\.10\.10\.10./.test(url)) {
        env = "dev";
    }
    //sit环境
    if (/sit\.sit\.com./.test(url)) {
        env = "sit";
    }
    // UAT环境
    if (/uat\.uat\.com./.test(url)) {
        env = "uat";
    }
    // 生产环境
    if (/prod\.prod\.com./.test(url)) {
        env = "prod";
    }
    return env;
}
// 不同环境的配置信息
export function envConfig() {
    let urlConfig = {}
    const env = getEnv()
    switch (env) {
        // 本地环境
        case 'local':
        // 开发环境
        case 'dev':
            urlConfig = {
                url: 'https://www.fastmock.site/mock/9d721f8600395e27eebc0388281d1826/starship-dbass/',
                local: 'http://localhost:3000',
                // mock: 'https://www.fastmock.site/mock/9d721f8600395e27eebc0388281d1826/starship-dbass/',
                mock: 'https://www.fastmock.site/mock/5ea44c8d5ded03d6407147d34fa16f93/ding/',
                SUPPLIER_HOST: 'http://www.baidu.com',
                CONFIGURATION_HOST: 'http://www.baidu.com'
            }
            break;
        //sit环境
        case 'sit':
            urlConfig = {
                url: 'https://www.fastmock.site/mock/9d721f8600395e27eebc0388281d1826/starship-dbass',
                SUPPLIER_HOST: 'http://www.baidu.com',
                CONFIGURATION_HOST: 'http://www.baidu.com'
            }
            break;
        // UAT环境
        case 'uat':
            urlConfig = {
                url: 'https://www.fastmock.site/mock/9d721f8600395e27eebc0388281d1826/starship-dbass',
                SUPPLIER_HOST: 'http://www.baidu.com',
                CONFIGURATION_HOST: 'http://www.baidu.com'
            }
            break;
        // 生产环境
        case 'prod':
            urlConfig = {
                url: 'https://www.fastmock.site/mock/9d721f8600395e27eebc0388281d1826/starship-dbass',
                SUPPLIER_HOST: 'http://www.baidu.com',
                CONFIGURATION_HOST: 'http://www.baidu.com'
            }
            break;
        default: ;

    }
    return urlConfig
}
