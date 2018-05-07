import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore } from "redux";
// import promise from "redux-promise";
import rootReducer from "./reducers/index";

// const store = createStore(rootReducer, {}, applyMiddleware(promise));
const store = createStore(rootReducer, {
  "idea": 'hello'
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

console.log('====================================');
console.log(store.getState());
console.log('====================================');