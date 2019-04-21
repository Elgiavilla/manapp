import {Alert, AsyncStorage} from 'react-native'
import axios from 'axios'
import {baseUrl} from './../baseurl'

export function logout(){
    return {
        type: 'GET_LOGOUT',
        payload: AsyncStorage.removeItem('token')
    }
}

export function getActivityUser(token){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    return{
        type: 'GET_ACTIVITY_USER',
        payload: axios.get(`${baseUrl}activity/user/1`, {headers})
            .then(response => {
                return response
            }).catch((error) => {
                return error
            })
    }
}

export function getActivityById(id){
    const headers = {
        'Content-Type': 'application/json'
    }

    return{
        type: 'GET_ACTIVITY_ID',
        payload: axios.get(`${baseUrl}activity/${id}`, {headers})
            .then(response => {
                return response
            }).catch((error) => {
                return error
            })
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

export function getActivityByUser(token){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    return{
        type: 'GET_ACTIVITY',
        payload: axios.get(`${baseUrl}activity/user/1`, {headers})
            .then(response => {
                return response
            }).catch((error) => {
                return error
            })
    }
}

export function getActivityByUser(token){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    return{
        type: 'GET_ACTIVITY',
        payload: axios.get(`${baseUrl}activity/user/today`, {headers})
            .then(response => {
                return response
            }).catch((error) => {
                return error
            })
    }
}