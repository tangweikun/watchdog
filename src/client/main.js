import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import App from '../imports/app/app.jsx';

const store = configureStore()

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
});
