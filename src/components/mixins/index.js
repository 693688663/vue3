/*
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-28 11:15:44
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
  directives: {
    code: function (el, val) {
      // console.log(el)
      // console.log(val)
      // console.log(val.value)
      if (val.value == 1) {
        el.style.display = 'none'
      }
    }
  }
}
export default mixins