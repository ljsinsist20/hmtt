import request from '@/utils/request'
import store from '@/store'

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
        url: '/v1_0/user/channels',
        headers: {
            Authorization: 'Bearer ' + store.state.token
        }
    })
}

export const artcilesListAPI = ({ channelId }) => {
    return request({
        url: '/v1_0/articles',
        // headers: {
        //     Authorization: 'Bearer ' + store.state.token
        // }
        params: {
            channel_id: channelId,
            timestamp: (new Date()).getTime()
        }
    })
}