<template>
  <div>
    <!-- 顶部栏 -->
    <van-nav-bar title="频道管理">
      <template #right>
        <van-icon name="cross" color="white" size=".373rem" @click="$emit('close')"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 我的频道 -->
    <div class="my-channel-box">
      <div class="channel-title">
        <span>我的频道
          <span class="small-title">
            点击进入频道
          </span>
        </span>
        <span>编辑</span>
      </div>
      <van-row type="flex">
        <van-col span="6">
          <div class="channel-item van-hairline--surround">
            名字
            <!-- 徽标 -->
            <van-badge color="transparent" class="cross-badge">
              <template #content>
                <van-icon name="cross" class="badge-icon" color="#cfcfcf" size="0.32rem"></van-icon>
              </template>
            </van-badge>
          </div>
        </van-col>
      </van-row>
    </div>
    <!-- 更多频道 -->
    <div class="more-channel-box">
        <div class="channel-title">
            <span>点击加载更多频道</span>
        </div>
        <van-row type="flex">
            <van-col span="6">
                <div class="channel-item van-hairline--surround">名字</div>
            </van-col>
        </van-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.van-nav-bar {
  background: #007bff;
}
.my-channel-box,
.more-channel-box {
  .channel-title {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 28px;
    padding: 0 6px;
  }
}

.channel-item {
  font-size: 12px;
  text-align: center;
  line-height: 36px;
  background-color: #fafafa;
  margin: 5px;
}

/*删除的微标 */
.cross-badge {
  position: absolute;
  right: -3px;
  top: 0;
  border: none;
}

/*提示文字 */
.small-title {
  font-size: 10px;
  color: gray;
}
</style>