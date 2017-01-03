import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './modules/app/app.jsx'

export default (
  <Route>
    <Route path="/">
      <IndexRoute component={App} />
      <Route path="/" component={App} />
    </Route>
    <Route path="login" component={App} />
  </Route>
)
