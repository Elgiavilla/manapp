import axios from 'axios'
import { baseUrl } from './../../baseurl'

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