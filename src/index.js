import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'


ReactDOM.render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

