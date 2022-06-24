<template>
  <div>
    <!-- 顶部栏 -->
    <van-nav-bar fixed>
      <template #left>
        <img class="logo" :src="imgObj">
      </template>
      <template #right>
        <van-icon name="search" size="0.48rem" color="#fff" @click="$router.push('/Search')"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 顶部频道 -->
    <van-tabs v-model="channelId" animated sticky offset-top="1.226667rem">
      <van-tab v-for="item in userChannelList" :key="item.id" :title="item.name" :name="item.id">
        <article-list :cid="channelId"></article-list>
      </van-tab>
    </van-tabs>
    <!-- +号图标 -->
    <van-icon name="plus" class="moreChannels" size="0.373rem" @click="show = true"></van-icon>
    <!-- 弹出层组件 -->
    <van-popup class="edit_wrap" v-model="show" @closed="onPopupClosed">
      <channel-edit @close="show = false" :userChannelList="userChannelList" @addChannel="addChannelFn"
        @delChannel="delChannel" ref="channelEdit" @openById="openByIdFn"></channel-edit>
    </van-popup>
  </div>
</template>

<script>
import logoPng from '../../assets/toutiao_logo.png'
import { userChannelAPI, updateChannelListAPI, deleteChannelAPI } from '@/api'
import ArticleList from '@/views/Home/ArticleList.vue'
import ChannelEdit from '@/views/Home/ChannelEdit.vue'

export default {
  name: 'Home',
  data () {
    return {
      imgObj: logoPng,
      channelId: 0, // 默认0是推荐
      userChannelList: [],
      show: false
    }
  },
  components: {
    ArticleList,
    ChannelEdit
  },
  async created () {
    const res = await userChannelAPI()
    this.userChannelList = res.data.data.channels
  },
  methods: {
    addChannelFn (obj) {
      this.userChannelList.push(obj)
      this.updateChannel()
    },

    async updateChannel () {
      const arr = this.userChannelList.map((obj) => {
        const newObj = { ...obj }
        return newObj
      })
      arr.forEach((obj, index) => {
        delete obj.name
        obj.seq = index + 1
      })
      await updateChannelListAPI({
        channels: arr
      })
    },

    async delChannel (id) {
      await deleteChannelAPI({
        target: id
      })
      const index = this.userChannelList.findIndex(obj => obj.id === id)
      this.userChannelList.splice(index, 1)
      this.updateChannel()
    },

    onPopupClosed () {
      this.$refs.channelEdit.isEdit = false
    },

    openByIdFn (id) {
      this.show = false
      this.channelId = id
    }
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

/deep/ .van-tabs__wrap {
  padding-right: 30px;
  background-color: #fff;
}

.moreChannels {
  position: fixed;
  top: 62px;
  right: 8px;
  z-index: 999;
}

.edit_wrap {
  width: 100%;
  height: 100%;
}
</style>
