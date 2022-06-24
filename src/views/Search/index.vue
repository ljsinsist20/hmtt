<template>
  <div>
    <van-search v-fofo placeholder="请输入搜索关键词" v-model="kw" background="blue" show-action @input="onInput"
      @cancel="$router.back()" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      kw: '',
      timer: null,
      suggestList: []
    }
  },
  methods: {
    onInput () {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (this.kw.length !== 0) {
          console.log(this.kw)
        }
      }, 500)
    }
  }
}
</script>

<style>
</style>