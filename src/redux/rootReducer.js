import { combineReducers } from 'redux'

import nav from './nav'
import authReducer from '../Auth/reducers'
import ProfileReducer from '../App/Profile/reducers'
import DashboardReducer from '../App/Dashboard/reducers'
import GoalsReducer from '../App/Goals/reducers'

const appReducer = combineReducers({
    nav,
    authReducer,
    DashboardReducer,
    ProfileReducer,
    GoalsReducer
})

export default appReducer