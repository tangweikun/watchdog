import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import demoRedux from './modules/demo-redux/reducers'
import weight from './modules/weight/reducers'

const rootReducer = combineReducers({
	demoRedux,
	weight,
	routing: routerReducer,
})

export default rootReducer
