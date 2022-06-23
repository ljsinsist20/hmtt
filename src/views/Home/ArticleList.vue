<template>
  <div>
    <article-item v-for="item in artcilesList" :key="item.art_id" :obj="item"></article-item>
  </div>
</template>

<script>
import ArticleItem from '@/views/Home/components/ArticleItem.vue'
import { artcilesListAPI } from '@/api/index'
import { timeAgo } from '@/utils/date'

export default {
    data () {
        return {
            artcilesList: []
        }
    },
    components: {
        ArticleItem
    },
    methods: {
      timeAgo: timeAgo
    },
    async created () {
        const res = await artcilesListAPI({
            channelId: 0
        })
        res.data.data.results.forEach((obj) => {
            obj.pubdate = this.timeAgo(obj.pubdate)
        })
        this.artcilesList = res.data.data.results
    }
}
</script>

<style>

</style>