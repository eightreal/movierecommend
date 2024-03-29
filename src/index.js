import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUp from './loginPage/Sign';
import Login from './loginPage/Login';
import Recommned from './movierecommendPage/Recommend'
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <Router>
      <Route exact path="/">
        <StrictMode>
          <SignUp />
        </StrictMode>
      </Route>
      <Route path="/sign">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/recommend">
        <StrictMode>
          <Recommned />
        </StrictMode>
      </Route>
  </Router>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
