<template>
  <div>
    <van-nav-bar title="黑马头条"></van-nav-bar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="formLogin.mobile" type="tel" name="手机号" label="手机号" placeholder="手机号" :rules="[
            {
              required: true,
              message: '请填写正确手机号',
              trigger: 'onSubmit',
              pattern: /^1[3456789]\d{9}$/,
            },
          ]" />
        <van-field v-model="formLogin.code" type="code" name="密码" label="密码" placeholder="密码" :rules="[
            {
              required: true,
              message: '请填写正确密码',
              trigger: 'onSubmit',
              pattern: /^\d{6}$/,
            },
          ]" />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" :loading="isLoading" :disabled="isLoading">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from '@/api/index'
import { Notify } from 'vant'
export default {
  name: 'Login',
  data () {
    return {
      formLogin: {
        mobile: '13888888888',
        code: '246810'
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit () {
      this.isLoading = true
      try {
        const res = await loginAPI(this.formLogin)
        const { token, refresh_token } = res.data.data
        console.log(token)
        console.log(refresh_token)
        Notify({ type: 'success', message: '登录成功' })
        this.isLoading = false
      } catch (error) {
        Notify({ type: 'warning', message: '登录失败' })
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background: #007bff;
}

/deep/.van-nav-bar__title {
  color: white;
}
</style>
