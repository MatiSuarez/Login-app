import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'semantic-ui-css/semantic.min.css' ;
import './Css/Main.css' ;

import About from './Pages/About' ;
import Home from './Pages/Home' ;
import Login from './Pages/Login' ;



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


