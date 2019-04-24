const initialState = {
    isLoading: false,
    data: [],
    results: {}
}

const AppReducers = (state = initialState, action) => {
    switch(action.type){
        case 'GET_COUNT_BY_USER_PENDING': 
            return {
                ...state,
                isLoading: true
            }
        case 'GET_COUNT_BY_USER_FULFILLED':
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