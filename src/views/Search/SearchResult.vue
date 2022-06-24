<template>
  <div>
    <!-- TODO: 改变left-arrow按钮颜色 -->
    <van-nav-bar title="搜索结果" left-arrow @click-left="$router.go(-1)">
    </van-nav-bar>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.van-nav-bar {
  background: #007bff;
}
</style>