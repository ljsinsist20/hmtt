<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad" offset="50"
      :immediate-check="false">
      <article-item v-for="item in artcilesList" :key="item.art_id" :obj="item"></article-item>
    </van-list>
  </div>
</template>

<script>
import ArticleItem from '@/views/Home/components/ArticleItem.vue'
import { artcilesListAPI } from '@/api/index'
import { timeAgo } from '@/utils/date'

export default {
  props: {
    cid: Number
  },
  data () {
    return {
      artcilesList: [],
      loading: false,
      finished: false,
      nextTime: null
    }
  },
  components: {
    ArticleItem
  },
  methods: {
    timeAgo: timeAgo,
    onLoad () {
        this.getArticleList()
    },
    async getArticleList () {
      const res = await artcilesListAPI({
        channelId: this.cid,
        timestamp: this.nextTime
      })
      res.data.data.results.forEach((obj) => {
        obj.pubdate = this.timeAgo(obj.pubdate)
      })
      if (res.data.data.results === 0) {
        this.finished = true
      } else {
        this.nextTime = res.data.data.pre_timestamp
        this.artcilesList = [...this.artcilesList, ...res.data.data.results]
        this.loading = false
      }
    }
  },
  async created () {
    this.getArticleList()
  }
}
</script>

<style>
</style>