<template>
  <div>
    <!-- 顶部栏 -->
    <van-nav-bar fixed>
      <template #left>
        <img class="logo" :src="imgObj">
      </template>
      <template #right>
        <van-icon name="search" size="0.48rem" color="#fff"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 顶部频道 -->
    <van-tabs v-model="active" animated sticky offset-top="1.226667rem">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import logoPng from '../../assets/toutiao_logo.png'
export default {
  name: 'Home',
  data () {
    return {
      imgObj: logoPng
    }
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background: #007bff;
}
.logo {
  width: 100px;
  height: 30px;
}
/deep/ .van-tabs__content{
  padding-top: 44px;
}
</style>
