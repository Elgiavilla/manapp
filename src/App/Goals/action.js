import axios from 'axios'
import { baseUrl } from './../../baseurl'

export function getActivityUser(token, page, limit){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    return{
        type: 'GET_ACTIVITY_USER',
        payload: axios.get(`${baseUrl}activity/user?page=${page}&limit=${limit}`, {headers})
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