<template>
  <div>
      <!-- 中间内容 -->
      <div class="home_container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
      <!-- 底部导航 -->
      <van-tabbar route v-model="active">
        <van-tabbar-item replace to="/layout/home" icon="home-o">home</van-tabbar-item>
        <van-tabbar-item  to="/layout/user" icon="search">user</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
export default {
    name: 'Layout',
    data () {
      return {
        active: 0
      }
    }
}
</script>

<style scoped lang="less">
.home_container{
  padding-bottom: 50px;
}
.van-tabbar{
  border-top: 1px red solid;
}
</style>
