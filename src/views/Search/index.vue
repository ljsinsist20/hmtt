<template>
  <div>
    <van-search v-fofo placeholder="请输入搜索关键词" v-model="kw" background="blue" show-action @input="onInput"
      @cancel="$router.back()" />
    <van-list>
      <van-cell v-for="(item,index) in suggestList" :key="index" :title="item" />
    </van-list>
  </div>
</template>

<script>
import { suggestListAPI } from '@/api/index'

export default {
  data () {
    return {
      kw: '',
      timer: null,
      suggestList: []
    }
  },
  methods: {
    async onInput () {
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        if (this.kw.length === 0) return
        const res = await suggestListAPI({
          q: this.kw
        })
        this.suggestList = res.data.data.options
      }, 500)
    }
  }
}
</script>

<style>
</style>