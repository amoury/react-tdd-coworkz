import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './components/root/App';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDODyKp24hlBZzDZaFwK3zbI7gBTA25AfE",
    authDomain: "react-zen-space.firebaseapp.com",
    databaseURL: "https://react-zen-space.firebaseio.com",
    projectId: "react-zen-space",
    storageBucket: "react-zen-space.appspot.com",
    messagingSenderId: "973737301348"
  };
  firebase.initializeApp(config);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
