import request from '@/utils/request'
// import store from '@/store'

export const allChannelListAPI = () => {
    return request({
        url: '/v1_0/channels'
    })
}

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

export const userChannelAPI = () => {
    return request({
        url: '/v1_0/user/channels'
            // headers: {
            //     Authorization: 'Bearer ' + store.state.token
            // }
    })
}

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