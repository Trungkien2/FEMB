import http from '../constants/http-common'

class UserService {
     create(formData){
        return http.post('/api/v1/user/signup',formData)
    }
    login(formData){
        return http.post('/api/v1/user/login',formData)
    }
    loadUser(){
        return http.get('api/v1/user');
    }
}

export default new UserService()