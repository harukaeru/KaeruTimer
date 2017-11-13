import { combineReducers } from 'redux'
import timer from './timer'

let reducers = {
  timer
}

const rootReducer = combineReducers(reducers)

export default rootReducer
