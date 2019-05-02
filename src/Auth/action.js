import {baseUrl} from './../baseurl'
import axios from 'axios'
import {Alert, AsyncStorage} from 'react-native'

export function login(email){
    return {
        type: 'POST_LOGIN',
        payload: axios.post(`${baseUrl}user/login`, {
            email: email
        }).then(function(response){
            AsyncStorage.setItem('token', response.data.token)
            return response
        }).catch(function(error){
            return Alert.alert('Failed', 'Invalid Email')
        })
    }
}

export function register(email, name, last_name){
    const data = {
        email: email,
        first_name: name,
        last_name: last_name,
        notification: false
    }

    return {
        type: 'POST_REGISTER',
        payload: axios.post(`${baseUrl}user/regist`, data).then(function(response){
            AsyncStorage.setItem('token', response.data.token)
            return response
        }).catch(function(error){
            return Alert.alert('Failed', 'Failed to regist')
        })
    }
}