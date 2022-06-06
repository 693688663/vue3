// 环境配置
console.log(window)

export function getEnv() {
    const url = location.href.toLocaleLowerCase();
    let envInLocalStorage = JSON.parse(window.localStorage.getItem('env'))
    if (envInLocalStorage) { return envInLocalStorage }
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
const envConfig = {
    dev: {

    },
    sit: {

    },
    uat: {

    },
    prod: {

    },
}

console.log
