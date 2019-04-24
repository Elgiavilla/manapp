const initialState = {
    isLoading: false,
    data: [],
    result: {}
}

const AppReducers = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ACTIVITY_PENDING': 
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ACTIVITY_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
        case 'POST_ACTIVITY_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'POST_ACTIVITY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                result: action.payload.data 
            }
        case 'CHANGE_STATUS_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'CHANGE_STATUS_FULFILLED':
            return {
                ...state,
                result: action.payload.data,
                isLoading: false
            }
        case 'GET_ACTIVITY_DASHBOARD_ID_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ACTIVITY_DASHBOARD_ID_FULFILLED':
            return {
                ...state,
                result: action.payload.data,
                isLoading: false
            }
        default:
            return state
    }
}

export default AppReducers