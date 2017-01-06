import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './modules/app/app.jsx'
import MainLayout from './modules/layout/index.jsx'
import DemoChart from './modules/demo-charts/index.jsx'
import Login from './modules/login/index.jsx'
import Weight from './modules/weight/containers/index'

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
      <Route path="/weight" component={Weight} />
    </Route>
    <Route path="login" component={Login} />
  </Route>
)
