const initialState = {
    isLoading: false,
    isLoggedIn: false,
    data: {}
}

const authReducers  = (state = initialState, action) => {
    switch(action.type){
        case 'POST_LOGIN_PENDING':
          return {
            ...state,
            isLoading: true
          }
        case 'POST_LOGIN_FULFILLED':
          return {
            ...state,
            data: action.payload.data,
            isLoggedIn: true,
            isLoading: false
          }
        case 'POST_REGISTER_PENDING':
          return {
            ...state,
            isLoading: true
          }
        case 'POST_REGISTER_FULFILLED':
          return {
            ...state,
            data: action.payload.data,
            isLoading: false
          }
        default :
            return state
    }
}

export default authReducers