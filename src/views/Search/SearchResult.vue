<template>
  <div>
    <!-- TODO: 改变left-arrow按钮颜色 -->
    <van-nav-bar title="搜索结果" left-arrow @click-left="$router.go(-1)">
    </van-nav-bar>
    <!-- 搜索结果 -->
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <article-item v-for="item in searchList" :obj="item" :key="item.art_id"></article-item>
    </van-list>
  </div>
</template>

<script>
import { searchListAPI } from '@/api/index'
import ArticleItem from '@/components/ArticleItem.vue'
import { timeAgo } from '@/utils/date'

export default {
  data () {
    return {
      searchList: []
    }
  },
  components: {
    ArticleItem
  },
  async created () {
    const res = await searchListAPI({
      q: this.$route.params.kw
    })
    res.data.data.results.forEach((item) => {
      item.pubdate = timeAgo(item.pubdate)
    })
    this.searchList = res.data.data.results
  }
}
</script>

<style scoped lang="less">
.van-nav-bar {
  background: #007bff;
}
</style>
