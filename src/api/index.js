import request from '@/utils/request'

// 登录
export const loginAPI = ({
    mobile,
    code
}) => {
    return request({
        url: '/v1_0/authorizations',
        method: 'POST',
        data: {
            mobile,
            code
        }
    })
}

// 获取所有频道列表
export const allChannelListAPI = () => {
    return request({
        url: '/v1_0/channels'
    })
}

// 设置用户的频道（重置式）
export const updateChannelListAPI = ({ channels }) => {
    return request({
        url: '/v1_0/user/channels',
        method: 'PUT',
        data: {
            channels: channels
        }
    })
}

// 获取用户的频道
export const userChannelAPI = () => {
    return request({
        url: '/v1_0/user/channels'

    })
}

// 删除指定用户频道
export const deleteChannelAPI = ({ target }) => {
    return request({
        url: `/v1_0/user/channels/${target}`,
        method: 'DELETE'
    })
}

// 获取文章新闻推荐
export const artcilesListAPI = ({ channelId, timestamp }) => {
    return request({
        url: '/v1_0/articles',
        params: {
            channel_id: channelId,
            timestamp: timestamp || (new Date()).getTime()
        }
    })
}

// 对文章不喜欢
export const articleDislikesAPI = ({ target }) => {
    return request({
        url: '/v1_0/article/dislikes',
        method: 'POST',
        data: {
            target: target
        }
    })
}

// 举报文章
export const articleReportAPI = ({ target, type, remark }) => {
    return request({
        url: '/v1_0/article/reports',
        method: 'POST',
        data: {
            target: target,
            type: type,
            remark: remark
        }
    })
}

// 获取联想建议（自动补全）
export const suggestListAPI = ({ q }) => {
    return request({
        url: '/v1_0/suggestion',
        params: {
            q: q
        }
    })
}

// 获取搜索结果
export const searchListAPI = ({ q, page }) => {
    return request({
        url: '/v1_0/search',
        params: {
            page: page,
            q: q
        }
    })
}

// 获取新闻详情
export const articleDetailAPI = ({ id }) => {
    return request({
        url: `/v1_0/articles/${id}`
    })
}

// 关注用户
export const followingsUserAPI = ({ target }) => {
    return request({
        url: '/v1_0/user/followings',
        method: 'POST',
        data: {
            target: target
        }
    })
}

// 取消关注用户
export const unFollowingsUserAPI = ({ target }) => {
    return request({
        url: `/v1_0/user/followings/${target}`,
        method: 'DELETE'
    })
}

// 对文章点赞
export const likingsArtcileAPI = ({ target }) => {
    return request({
      url: '/v1_0/article/likings',
      method: 'POST',
      data: {
          target: target
      }
    })
}

// 取消对文章点赞
export const unLikingsArtcileAPI = ({ target }) => {
    return request({
      url: `/v1_0/article/likings/${target}`,
      method: 'DELETE'
    })
}

// 获取评论或评论回复
export const getReviewsAPI = ({ type, source, offset = null, limit = 10 }) => {
  return request({
    url: '/v1_0/comments',
    method: 'GET',
    params: {
      type: type,
      source: source,
      offset: offset,
      limit: limit
    }
  })
}

// 对文章或者评论进行评论
export const setReviewAPI = ({ target, content, art_id = null }) => {
  return request({
    url: '/v1_0/comments',
    method: 'POST',
    data: {
      target: target,
      content: content,
      art_id: art_id
    }
  })
}

// 对评论或评论回复点赞
export const likeReviewAPI = ({ target }) => {
  return request({
    url: '/v1_0/comment/likings',
    method: 'POST',
    data: {
        target: target
    }
  })
}

// 取消对评论或评论回复点赞
export const unLikeReviewAPI = ({ target }) => {
  return request({
    url: `/v1_0/comment/likings/${target}`,
    method: 'DELETE'
  })
}
