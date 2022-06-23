<template>
  <div>
    <article-item v-for="item in artcilesList" :key="item.art_id" :obj="item"></article-item>
  </div>
</template>

<script>
import ArticleItem from '@/views/Home/components/ArticleItem.vue'
import { artcilesListAPI } from '@/api/index'

export default {
    data () {
        return {
            artcilesList: []
        }
    },
    components: {
        ArticleItem
    },
    async created () {
        const res = await artcilesListAPI({
            channelId: 0
        })
        this.artcilesList = res.data.data.results
    }
}
</script>

<style>

</style>