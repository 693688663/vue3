/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-27 16:35:30
 * @Description: 报错监听
 */
import { message, Modal } from 'ant-design-vue'
const mixins = {
  data() {
    return {
      q1: 1
    }
  },
  errorCaptured: (err, vm, info) => {
    // 错误信息
    let messages = err.message
    // 组件位置
    let vue = vm.$options.name
    Modal.error({
      title: "组件：" + vue + "，发生错误！",
      content: messages,
    });
    return false
  },
}
export default mixins