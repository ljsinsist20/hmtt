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
    <van-tabs v-model="channelId" animated sticky offset-top="1.226667rem">
      <van-tab v-for="item in channelList" :key="item.id" :title="item.name" :name="item.id">
        <article-list :cid="channelId"></article-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import logoPng from '../../assets/toutiao_logo.png'
import { userChannelAPI } from '@/api'
import ArticleList from '@/views/Home/ArticleList.vue'

export default {
  name: 'Home',
  data () {
    return {
      imgObj: logoPng,
      channelId: 0, // 默认0是推荐
      channelList: []
    }
  },
  components: {
    ArticleList
  },
  async created () {
    const res = await userChannelAPI()
    this.channelList = res.data.data.channels
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

/deep/ .van-tabs__content {
  padding-top: 44px;
}
</style>
