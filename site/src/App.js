import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

class App extends Component {

  signout = () => {
    localStorage.clear();
    return <Redirect to="/" />
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="content">
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" render={this.signout} />
          <Route path="/signup" component={Signup} />
        </section>
      </div>
    );
  }
}

export default App;
