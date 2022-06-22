<template>
  <div>
    <!-- 顶部栏 -->
    <van-nav-bar fixed >
      <template #left>
         <img class="logo" :src="imgObj">
      </template>
      <template #right>
        <van-icon name="search" size="0.48rem" color="#fff"></van-icon>
      </template>
    </van-nav-bar>
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
.van-nav-bar{
    background: #007bff;
}
.logo{
  width: 100px;
  height: 30px;
}
</style>
