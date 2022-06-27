<!--
 * @LastEditors: 丁玉欣
 * @LastEditTime: 2022-06-27 17:07:18
 * @Description: 文件介绍
-->
<template>
    <div class="main">
        <div class="login">
            <a-form name="basic" :wrapper-col="{ span: 24 }">
                <a-form-item name="username" v-bind="validateInfos.username">
                    <a-input v-model:value="formState.username" placeholder="请输入用户名" />
                </a-form-item>
                <a-form-item name="password" v-bind="validateInfos.password">
                    <a-input-password v-model:value="formState.password" autocomplete="true" placeholder="请输入密码" />
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 24 }">
                    <div :align="'right'">
                        <a-button type="primary" block html-type="submit" @click="fun.submit">登录</a-button>
                    </div>
                </a-form-item>
                <a-form-item :wrapper-col="{ span: 24 }">
                    <div :align="'right'">
                        <a-button type="link">修改密码</a-button>
                        <a-button type="link">找回密码</a-button>
                        <a-button type="link">注册</a-button>
                    </div>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
// vue
import {
    ref,
    reactive,
} from 'vue'
// md5
import md5 from 'js-md5'
// antd-v
import { Form } from 'ant-design-vue'
// interface
import * as Interface from '@/interface'
// services
import * as Services from './index.service'
import { useRouter, useRoute } from 'vue-router';
const router = useRouter(), route = useRoute();
// 
const useForm = Form.useForm;

// 数据
// 登录入参
const formState = reactive<Interface.loginParams>({
    username: "",//账号
    password: "",//密码
})
// 登录信息验证
const formRules = reactive({
    username: [
        {
            required: true,
            message: '请输入用户名',
        },
    ],
    password: [
        {
            required: true,
            message: '请输入密码',
        },
    ]
})
const {
    resetFields, //重置
    validate,//验证
    validateInfos //验证信息
} = useForm(formState, formRules)
// 函数
const fun = {
    // 登录提交
    submit: () => {
        validate().then((params) => {
            let data: Interface.loginParams = {
                ...params,
                password: md5(params.password)
            }
            Services.login(data).then((res) => {
                //   router.push("/home");

                console.log("---")
                console.log(res)
                console.log("---")
            })
        })
    },
}

</script>
<style lang="less" scoped>
.main {
    position: relative;
    text-align: center;

    .login {
        width: 350px;
        // border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        position: absolute;
        top: 40%;
        left: 60%;
        margin: -100px 0 0 -100px;

    }

}
</style>