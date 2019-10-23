import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Register from "./Register/Register";
import Login from "./Login/Login";
import Homepage from "./Homepage/Homepage";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Product from './Category/Product/Product';
import Cart from './Cart/Cart';
import Admin from './Admin/Admin';
import Categories from './Homepage/categories/Categories';
import NoMatch from './NoMatch/NoMatch'
import Payment from './Cart/Payment/Payment';

import './App.scss';
import Category from './Category/Category';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="categories-side-bar">
            <Categories />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/cart" component={Cart} />
              <Route path="/cart/payment" exact component={Payment} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/profile" component={Profile} />
              <Route path="/category/:categoryId/product/:id" component={Product} />
              <Route path="/category/:id" exact component={Category} />

              <Route path="/admin" component={Admin} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
