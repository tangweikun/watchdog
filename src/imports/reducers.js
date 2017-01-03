import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import demoRedux from './demo-redux/reducers'

const rootReducer = combineReducers({
  demoRedux,
  routing: routerReducer,
})

export default rootReducer
