import axios from 'axios'
import {baseUrl} from './../../baseurl'

export function getCountByUser(token){
    const headers = {
        'Content-Type': 'application/json',
        'Auth': token
    }

    return{
        type: 'GET_COUNT_BY_USER',
        payload: axios.get(`${baseUrl}activity/user/count`, {headers})
            .then(response => {
                return response
            }).catch(error => {
                return error
            })
    }
}