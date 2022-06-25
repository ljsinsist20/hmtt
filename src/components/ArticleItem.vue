<template>
  <div>
    <van-cell-group @click="$router.push(`/article_detail?aid=${obj.art_id}`)">
      <van-cell>
        <template #title>
          <div class="title-box">
            <span>{{obj.title}}</span>
            <img class="thumb" v-if="obj.cover.type === 1" :src="obj.cover.images">
          </div>
          <div class="thumb-ox" v-if="obj.cover.type > 1">
            <img class="thumb" v-for="(imaUrl, index) in obj.cover.images" :src="imaUrl" :key="index">
          </div>
        </template>
        <template #label>
          <div class="lable-box">
            <div>
              <span>{{obj.aut_name}}</span>
              <span>{{obj.comm_count}}</span>
              <span>{{obj.pubdate}}</span>
            </div>
            <van-icon name="cross" @click.stop="show = true" v-if="showIcon"></van-icon>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" get-container="body"
      :cancel-text="cancelText" close-on-click-action @cancel="onCancel" />
  </div>
</template>

<script>
import { firstActions, secondActions } from '@/api/report'

export default {
  props: {
    obj: {
      type: Object,
      default () {
        return {}
      }
    },
    showIcon: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      show: false,
      actions: firstActions,
      cancelText: '取消'
    }
  },
  methods: {
    onSelect (item) {
      if (item.name === '反馈垃圾内容') {
        this.actions = secondActions
        this.cancelText = '返回'
        this.show = true
      } else if (item.name === '不感兴趣') {
        this.$emit('dislike', this.obj)
        this.show = false
      } else {
        this.$emit('report', this.obj, item.value)
        this.actions = firstActions
        this.show = false
      }
    },
    onCancel () {
      if (this.cancelText === '返回') {
        this.actions = firstActions
        this.cancelText = '取消'
        this.show = true
      }
    }
  }
}
</script>

<style scoped lang="less">
.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.lable-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.lable-box span {
  margin: 0 3px;
  &:first-child {
    margin-left: 0;
  }
}

.thumb {
  width: 113px;
  height: 70px;
}
</style>