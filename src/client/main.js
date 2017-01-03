import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import configureStore from '../store/configureStore'
import App from '../imports/modules/app/app.jsx';
import routes from '../imports/routes'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>, document.getElementById('root'));
});
