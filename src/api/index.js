import request from '@/utils/request'

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