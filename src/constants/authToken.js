import axios from "axios";

export const AuthToken = (token)=>{
    if(token){
        axios.defaults.headers.common['authorization'] = `Bearer ${token}`
    }else{
        delete axios.defaults.headers.common['authorization']
    }
}

