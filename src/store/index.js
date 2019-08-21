import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// import reducers...
const rootReducer = combineReducers({})

const middleware = [thunk, logger]

export default createStore(rootReducer, applyMiddleware(...middleware))
