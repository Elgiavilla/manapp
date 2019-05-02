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
        payload: axios.get(`${baseUrl}user/id`, {headers})
                .then(response => {
                    return response
                }).catch((error) => {
                    return error
                })
    }
}

export function updateUser(token, dataUser){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    const data = {
        first_name: dataUser.first_name,
        last_name: dataUser.last_name,
        email: dataUser.email
    }

    return{
        type: 'UPDATE_USER',
        payload: axios.put(`${baseUrl}user`, data, {headers})
            .then((response) => {
                return response
            }).catch((error) => {
                return error
            })
    }
}

export function updateSwitch(token, switchBtn){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    const data = {
        notification: switchBtn
    }

    return{
        type: 'UPDATE_SWITCH_USER',
        payload: axios.put(`${baseUrl}user`, data, {headers})
            .then((response) => {
                return response
            }).catch((error) => {
                return error
            })
    }
}