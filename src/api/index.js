import request from '@/utils/request'
// import store from '@/store'

// 获取所有频道列表
export const allChannelListAPI = () => {
    return request({
        url: '/v1_0/channels'
    })
}

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
    // 获取用户的频道
export const userChannelAPI = () => {
        return request({
            url: '/v1_0/user/channels'
                // headers: {
                //     Authorization: 'Bearer ' + store.state.token
                // }
        })
    }
    // 获取文章新闻推荐
export const artcilesListAPI = ({ channelId, timestamp }) => {
        return request({
            url: '/v1_0/articles',
            // headers: {
            //     Authorization: 'Bearer ' + store.state.token
            // },
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
            // headers: {
            //     Authorization: 'Bearer ' + store.state.token
            // }
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
        // headers: {
        //     Authorization: 'Bearer ' + store.state.token
        // }
    })
}