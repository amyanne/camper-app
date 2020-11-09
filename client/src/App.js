import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import './App.css';

class App extends Component {



  render() {
  return (
    <Router>
      <Nav />
      <div className="container" align="center">
        <Switch>
          <Route exact path="/" component={ Home } />
         
        </Switch>
      </div>
  </Router>
    );
  }
}

export default App;
