const initialState = {
    isLoading: false,
    data: []
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
        default:
            return state
    }
}

export default AppReducers