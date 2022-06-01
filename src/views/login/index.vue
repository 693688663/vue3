<template>
    <div class="main">
        <div class="login">
            <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
                autocomplete="off" @finish="fun.onFinish" @finishFailed="fun.onFinishFailed">
                <a-form-item label="Username" name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]">
                    <a-input v-model:value="formState.username" />
                </a-form-item>

                <a-form-item label="Password" name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {
    ref,
    reactive,
} from 'vue'
import * as Interface from './index.interface'
const formState = reactive<Interface.LoginEnter>({
    username: '',
    password: '',
})

const fun = {
    onFinish: (val) => {
        console.log(val)
    },
    onFinishFailed: (val) => {
        console.log(val)
    },
}
</script>
<style lang="less" scoped>
.main {
    position: relative;
    text-align: center;

    .login {
        width: 400px;
        // border: 1px solid #ddd;
        border-radius: 5px;
        padding: 10px;
        position: absolute;
        top: 40%;
        left: 50%;
        margin: -100px 0 0 -100px;
    }

}
</style>