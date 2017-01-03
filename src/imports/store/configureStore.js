import { createStore, applyMiddleware, compose } from 'redux'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

export default function configureStore () {
	const store = createStore(
    rootReducer,
    compose(
    applyMiddleware(thunk.withExtraArgument({
	Meteor,
	Tracker,
})),
    window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

	return store
}
