import api from './index'

export default {
    add(announcements) {
        return api.post('mycontacts', announcements)
    },
    get() {
        return api.get('mycontacts')
    },
    list(params) {
        return api.post('mycontacts', params)
    },
    update(announcements) {
        return api.patch('mycontacts', announcements)
    },
    delete(id) {
        return api.remove('mycontacts', id)
    },
}