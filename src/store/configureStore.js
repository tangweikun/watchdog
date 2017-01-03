import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../imports/reducers'

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
