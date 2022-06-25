<template>
  <div>
    <!-- header -->
    <van-nav-bar title="文章详情" fixed left-arrow @click-left="$router.back()"></van-nav-bar>
    <!-- 文章信息 -->
    <div class="article-container">
      <div class="art-title">
        <h1>{{artObj.title}}</h1>
      </div>

      <van-cell center :title="artObj.aut_name" :label="artObj.pubdate">
        <template #icon>
          <!-- <img :src="artObj.aut_photo" alt="" class="avatar" /> -->
        </template>
        <template #default>
            <div>
                <van-button type="info" size="mini" v-if="artObj.is_followed">已关注</van-button>
                <van-button icon="plus" type="info" size="mini" v-else>关注</van-button>
            </div>
        </template>
      </van-cell>

      <van-divider></van-divider>

      <div class="art-content" v-html="artObj.content"></div>

      <van-divider>end</van-divider>

      <div class="like-box">
        <van-button icon="good-job" type="danger" size="small" v-if="artObj.attribute === 1">已点赞</van-button>
        <van-button icon="good-job-o" type="danger" size="small" plain v-else>点赞</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { articleDetailAPI } from '@/api/index'

export default {
  data () {
    return {
      artObj: {}
    }
  },
  async created () {
    const res = await articleDetailAPI({ id: this.$route.query.aid })
    this.artObj = res.data.data
  }
}
</script>

<style scoped lang="less">
.article-container {
  padding: 10px;
  margin-top: 46px;
}
.art-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.art-content {
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  word-break: break-all;
  /deep/ img {
    width: 100%;
  }
  /deep/ pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}

.van-cell {
  padding: 5px 0;
  &::after {
    display: none;
  }
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-right: 5px;
  border: none;
}

.like-box {
  display: flex;
  justify-content: center;
}

.loading {
  margin-top: 50px;
  text-align: center;
}
</style>