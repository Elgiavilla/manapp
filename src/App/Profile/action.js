import {Alert, AsyncStorage} from 'react-native'
import axios from 'axios'
import {baseUrl} from './../../baseurl'

export function logout(){
    return {
        type: 'GET_LOGOUT',
        payload: AsyncStorage.removeItem('token')
    }
}

export function userData(token){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    return {
        type: 'GET_USER',
        payload: axios.get(`${baseUrl}user/auth`, {headers})
                .then(response => {
                    return response
                }).catch((error) => {
                    return error
                })
    }
}