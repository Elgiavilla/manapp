const initialState = {
    isLoading: false,
    data: [],
    results: {},
    others : {}
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
                data: action.payload.data.records,
                others: action.payload.data,
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
                results: action.payload.data,
                isLoading: false
            }
        default:
            return state
    }
}

export default AppReducers