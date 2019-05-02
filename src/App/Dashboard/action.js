import axios from 'axios'
import { baseUrl } from './../../baseurl'

export function getActivityByUser(token, page, limit){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    return{
        type: 'GET_ACTIVITY',
        payload: axios.get(`${baseUrl}activity/user/today?page=${page}&limit=${limit}`, {headers})
            .then(response => {
                //console.log(response.records)
                return response
            }).catch((error) => {
                return error
            })
    }
}

export function postActivityByUser(token, dataAct){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    const data = {
        title: dataAct.title,
        description: dataAct.description,
        time_end: dataAct.date
    }

    return{
        type: 'POST_ACTIVITY',
        payload: axios.post(`${baseUrl}activity`, data, {headers})
            .then((response) => {
                return response
            })
            .catch((error) => {
                return error
            })
    }
}

export function changeStatus(id, status){
    const headers = {
        'Content-Type': 'application/json'
    }

    return{
        type: 'CHANGE_STATUS',
        payload: axios.get(`${baseUrl}activity/${id}/${status}`, {headers})
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
        type: 'GET_ACTIVITY_DASHBOARD_ID',
        payload: axios.get(`${baseUrl}activity/${id}`, {headers})
            .then(response => {
                return response
            }).catch((error) => {
                return error
            })
    }
}