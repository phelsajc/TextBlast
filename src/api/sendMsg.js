import api from './index'

export default {
    add(data) {
        return api.post('send', data)
    },
    get() {
        return api.get('send')
    },
    list(params) {
        return api.post('send', params)
    },
    update(announcements) {
        return api.patch('send', announcements)
    },
    delete(id) {
        return api.remove('send', id)
    },
}