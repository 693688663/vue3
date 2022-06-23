/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-23 14:43:17
 * @Description: 文件介绍
 */





/**
 * @description: 过滤出要展示的菜单路由
 * @param {*} list 所有的菜单路由
 * @return {*}
 * 递归整理路由 将showType为空或false的值过滤掉
 * json两次转换将去除掉函数变量
 */
const setRouter = (list) => {
  let arr = []
  for (let i = 0; i < list.length; i++) {
    let item = JSON.parse(JSON.stringify(list[i]))
    // 不展示的菜单路由跳过
    if (!item.showType) continue;
    if (
      item?.children &&
      item?.children?.length > 0
    ) {
      item.children = setRouter(item?.children)
    }
    arr.push(item)

  }
  return arr
}


/**
 * @description: 生成不重复id
 * @return {*}
 * 生成唯一id为没有id 或者可能重复的列表id赋值
 */
const onlyId = () => {
  let i = 0;
  return function () {
    let m = i += 1;
    return m
  }
}



export default {
  setRouter, //整理路由文件
  onlyId: onlyId()//生成id
}