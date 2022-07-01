<template>
  <div>
    <!--TODO 评论刷新加载-->
    <div class="cmt-list" :class="isShow ? 'art-cmt-container-1' : 'art-cmt-container-2'">
      <div class="cmt-item" v-for="item in reviews" :key="item.com_id">
        <div class="cmt-header">
          <div class="cmt-header-left">
            <img class="avatar" src="item.aut_photo" alt="图片">
            <span class="uname">{{ item.aut_name }}</span>
          </div>
          <div class="cmt-header-right">
            <van-icon name="like" size="16" color="red" v-if="item.is_liking" @click="like(false, item)"></van-icon>
            <van-icon name="like-o" size="16" color="grey" v-else @click="like(true, item)"></van-icon>
          </div>
        </div>
        <!--主体区域-->
        <div class="cmt-body">
          {{ item.content }}
        </div>
        <!--尾部区域 -->
        <div class="cmt-footer">
          {{ timeAgo(item.pubdate) }}
        </div>
      </div>
    </div>
    <!-- 底部添加评论区域 - 1 -->
    <div class="add-cmt-box van-hairline--top" v-if="isShow">
      <van-icon name="arrow-left" size="0.48rem" @click="$router.back()" />
      <div class="ipt-cmt-div" @click="isShow = false">发表评论</div>
      <div class="icon-box">
        <van-badge :content="totalCount" :max="99" @click="moveFn">
          <van-icon name="comment-o" size="0.53333334rem" />
        </van-badge>
        <van-icon name="star-o" size="0.53333334rem" />
        <van-icon name="share-o" size="0.53333334rem" />
      </div>
    </div>
    <!-- 底部添加评论区域 - 1 -->
    <div class="cmt-box van-hairline--top"  v-fofo v-else>
    <!--TODO v-fofo不生效-->
      <textarea placeholder="友善评论、理性发言、阳光心灵" @blur="blurFn" v-model="reviewContent"></textarea>
      <van-button type="default" :disabled="reviewContent.length === 0" @click="setReview">发布</van-button>
    </div>
  </div>
</template>

<script>
import { getReviewsAPI, setReviewAPI, likeReviewAPI, unLikeReviewAPI } from '@/api/index'
import { timeAgo } from '@/utils/date'
export default {
  data() {
    return {
      reviews: [],
      isShow: true,
      aid: this.$route.query.aid,
      reviewContent: '',
      totalCount: ''
    }
  },
  async created() {
    this.getReviews()
  },
  methods: {
    timeAgo,
    async getReviews() {
      const res = await getReviewsAPI({ type: 'a', source: this.aid })
      this.reviews = res.data.data.results
      this.totalCount = res.data.data.total_count || '' // 如果无评论数(0), 给空字符串(防止0微标出现)
    },
    async setReview() {
      const res = await setReviewAPI({ target: this.aid, content: this.reviewContent })
      this.reviews.unshift(res.data.data.new_obj)
      this.totalCount++
      this.reviewContent = ''
    },
    async like(flag, item) {
      if (flag) {
      //  点赞
        await likeReviewAPI({ target: item.com_id })
        item.is_liking = true
      } else {
        await unLikeReviewAPI({ target: item.com_id })
        item.is_liking = false
      }
    },
    async moveFn() {
      document.querySelector('.like-box').scrollIntoView({
        behavior: 'smooth'
      })
    },
    blurFn() {
      setTimeout(() => {
        this.isShow = true
      })
    }
  }
}
</script>

<style scoped lang="less">
.cmt-list{
  padding: 10px;
  .cmt-item{
    .cmt-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .cmt-header-left {

      }
      .cmt-header-right{

      }
    }
    .cmt-body {
      margin: 10px 0;
      text-indent: 2em;
      //word-break: break-all;
      font-size: 15px;
      line-height: 30px;
    }
    .cmt-footer{
      font-size: 12px;
      color: gray;
      margin-top: 10px;
    }
  }
}
.add-cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 40px;
  padding-left: 10px;
  width: 100%;

  #arrow-left {

  }
  .ipt-cmt-div {
    //background-color: gray;
    width: 200px;
    font-size: 14px;
    line-height: 28px;
  }
  .icon-box {
    //background-color: gray;
    width: 130px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    #comment-o {
    }
    #star-o {
    }

    #share-o {
    }
  }
}
.cmt-box{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: white;
  textarea{
    flex: 1;
    height: 66%;
    border: 1px solid #efefef;
    background-color: #f8f8f8;
    border-radius: 6px;
    padding: 5px;
    resize: none;
  }
  .van-button{
    height: 100%;
    border: none;

  }
}
/*美化 - 文章详情 - 底部的评论页面 */
// 外层容器
.art-cmt-container-1 {
  padding-bottom: 46px;
}
.art-cmt-container-2 {
  padding-bottom: 80px;
}
</style>
