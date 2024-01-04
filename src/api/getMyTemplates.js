import api from './index'

export default {
    add(announcements) {
        return api.post('mytemplates', announcements)
    },
    get() {
        return api.get('mytemplates')
    },
    list(params) {
        return api.post('mytemplates', params)
    },
    update(announcements) {
        return api.patch('mytemplates', announcements)
    },
    delete(id) {
        return api.remove('mytemplates', id)
    },
}