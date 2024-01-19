import api from './index'

export default {
    add(data) {
        return api.post('saveGroup', data)
    },
    get() {
        return api.get('mycontacts')
    },
    list(params) {
        return api.post('mycontacts', params)
    },
    update(data) {
        return api.patch('mycontacts', data)
    },
    delete(id) {
        return api.get('deleteGroup/'+ id)
    },
    getDefault() {
        return api.get('getDefault')
    },    
}