import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from './Admin/Admin';
import Cart from './Cart/Cart';
import Categories from './Homepage/categories/Categories';
import Category from './Category/Category';
import Header from "./Header/Header";
import Homepage from "./Homepage/Homepage";
import Login from "./Login/Login";
import NoMatch from './NoMatch/NoMatch';
import Payment from './Cart/Payment/Payment';
import Product from './Category/Product/Product';
import Profile from "./Profile/Profile";
import Register from "./Register/Register";

import './App.scss';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container App-body">
            <div className="side-bar">
              <Categories />
            </div>
            <Switch className="content">
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
