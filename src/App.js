import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Feedback } from './Feedback';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{
    render() {
      return (
      <React.Fragment>
        <Router>
            <Switch>
                <Route exact path="/" component = {Feedback}/>
            </Switch>
        </Router>
      </React.Fragment>

      );
    }
}

export default App;
