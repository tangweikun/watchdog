import React from 'react'
import 'antd/dist/antd.css'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from '../imports/store/configureStore'
import routes from '../imports/routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

Meteor.startup(() => {
	render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>, document.getElementById('root'))
})
