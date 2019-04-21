import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

import reducers from './rootReducer'

const middleware = createReactNavigationReduxMiddleware(
    // "root",
    state => state.nav,
)

const store = createStore(
    reducers,
    applyMiddleware(
        middleware,
        promiseMiddleware,
        logger
    )
)

export default store