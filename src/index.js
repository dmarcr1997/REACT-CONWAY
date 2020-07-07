import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension'
import BlockReducer from './reducers/block_reducer';

const store = createStore(BlockReducer)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


