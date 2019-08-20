import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Register from './Register';
import Login from './Login';
import Homepage from './Homepage';
import Profile from './Profile';

export class Header extends Component {
    render() {
        return (
            <Router> 
                <div>
                    <header>
                        <div className="header">
                            <div className="head-line">
                                My online store!
                            </div>
                            <ul>
                                <li><Link to="/" className="btn btn-dark">homepage</Link></li>
                                <li><Link to="/login" className="btn btn-dark">login</Link></li>
                                <li><Link to="/register" className="btn btn-dark">register</Link></li>
                                <li><Link to="/me" className="btn btn-dark">profile</Link></li>
                            </ul>

                            <Route path="/" exact component={Homepage} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/me" component={Profile} />
                        </div>
                    </header>
                </div>
            </Router>
        )
           
    }
}

export default Header
