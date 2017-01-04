import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './modules/app/app.jsx'
import MainLayout from './modules/layout/index.jsx'

export default (
  <Route>
    <Route
      path="/"
      getComponent={(nextState, cb) => {
	cb(null, MainLayout)
}}
    >
      <IndexRoute component={App} />
      <Route path="/demo" component={App} />
    </Route>
    <Route path="login" component={App} />
  </Route>
)
