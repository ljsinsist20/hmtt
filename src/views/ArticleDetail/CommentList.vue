<template>
  <div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-header">
          <div class="cmt-header-left">
            <img class="avatar" src="" alt="图片">
            <span class="uname">ljs</span>
          </div>
          <div class="cmt-header-right">
            <van-icon name="like" size="16" color="red"></van-icon>
            <van-icon name="like-o" size="16" color="grey"></van-icon>
          </div>
        </div>
        <!--主体区域-->
        <div class="cmt-body">
          基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。
        </div>
        <!--尾部区域 -->
        <div class="cmt-footer">3天前</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getReviewsAPI } from '@/api/index'
export default {
  props: {
    articleId: {
      type: String
    }
  },
  data() {
    return {
      reviews: []
    }
  },
  async created() {
    this.getReviews()
  },
  methods: {
    async getReviews() {
      console.log(this.articleId)
      const res = await getReviewsAPI({ type: 'a', source: this.articleId })
      console.log(res.data.data)
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
</style>
