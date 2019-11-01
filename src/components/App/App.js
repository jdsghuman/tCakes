import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import Orders from '../Orders/Orders';
import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_BASES' });
    this.props.dispatch({ type: 'FETCH_FROSTINGS' });
    this.props.dispatch({ type: 'FETCH_TOPPINGS' });
    this.props.dispatch({ type: 'FETCH_ORDERS' });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/checkout"
            exact
            component={Checkout}
          />
          <Route
            path="/orders"
            exact
            component={Orders}
          />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
