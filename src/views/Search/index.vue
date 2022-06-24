<template>
  <div>
    <van-search v-fofo placeholder="请输入搜索关键词" v-model="kw" background="blue" show-action @input="onInput"
      @cancel="$router.back()" />
    <!-- <van-list>
      <van-cell v-for="(item,index) in suggestList" :key="index" :title="lightFn(item, kw)" />
    </van-list> -->
    <div class="sugg-list">
      <div class="sugg-item"  v-for="(item,index) in suggestList" :key="index" v-html="lightFn(item, kw)"></div>
    </div>
  </div>
</template>

<script>
import { suggestListAPI } from '@/api/index'
import { lightFn } from '@/utils/str'

export default {
  data () {
    return {
      kw: '',
      timer: null,
      suggestList: []
    }
  },
  methods: {
    lightFn,
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

<style scoped lang="less">
.sugg-list {
    .sugg-item{
        padding: 0 15px;
        border-bottom: 1px solid #f8f8f8;
        line-height: 50px;
        font-size: 14px;
        // 省略号
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
}
</style>