import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App';
import './index.css';
import {Provider} from 'react-redux'
import {applyMiddleware, legacy_createStore as createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import {reducers}  from './containers/reducers'

const ws = new WebSocket('ws://localhost:8080/chat')

// const store= createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   document.getElementById('root'),
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);