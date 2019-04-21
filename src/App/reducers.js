const initialState = {
    isLoading: false,
    data: []
}

const AppReducers = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ACTIVITY_USER_PENDING': 
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ACTIVITY_USER_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
        case 'GET_ACTIVITY_ID_PENDING': 
            return {
                ...state,
                isLoading: true
            }
        case 'GET_ACTIVITY_ID_FULFILLED':
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
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
            case 'GET_LOGOUT_PENDING' : 
            return {
                ...state,
                isLoading: true
            }
        case 'GET_LOGOUT_FULFILLED':
            return {
                ...state,
                isLoading: false
            }
        case 'GET_USER_PENDING' : 
            return {
                ...state,
                isLoading: true
            }
        case 'GET_USER_FULFILLED': 
            return {
                ...state,
                data: action.payload.data,
                isLoading: false
            }
        default:
            return state
    }
}

export default AppReducers