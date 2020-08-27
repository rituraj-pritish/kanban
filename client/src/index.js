import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './redux'
import App from './App';
import './index.css'

const middlewares = []

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(rootReducer, devTools)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
