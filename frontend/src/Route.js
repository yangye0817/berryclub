import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Laboratory from './pages/Laboratory';


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Product = () => (
  <div>
    <h2>Product</h2>
  </div>
)

class R extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link>
          <Link to="/lab">lab</Link>
          <Link to="/Product">Product</Link>
          <hr/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/lab" component={Laboratory}></Route>
          <Route path="/product" component={Product}></Route>
        </div>
      </Router>
    );
  }
}

export default R;