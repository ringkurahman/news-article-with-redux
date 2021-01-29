import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

// Redux, React-Redux, Redux-Promise
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
// Root Reducer
import rootReducer from './components/store/reducers/rootReducer'
// Created Store with middleware
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
  )}>
    <Routes />
  </Provider>,
  document.getElementById("root")
)
