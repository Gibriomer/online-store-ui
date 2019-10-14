import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Products from './Products/Products';
import Categories from './Categories/Categories';
import Users from './Users/Users';
import UserService from '../services/user.service';

import './Admin.scss';
import CreateProducts from './Products/CreateProducts/CreateProducts';
import CreateCategory from './Categories/CreateCategory/CreateCategory';

export class Admin extends Component {
    
    // constructor(props) {
    //     super(props);
    // };
    
    componentDidMount() {
		UserService
			.me()
			.then(response => response.json())
			.then(user => {
				console.log(user);
            });
	}
    
    render() {
        return (
            <Router>
                <div className="admin">
                    <h1>Admin panel</h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to="/admin/products">product</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/admin/categories">Categories</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to="/admin/users">Users</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <Route path="/admin/products" exact component={Products} />
                            <Route path="/admin/products/create" component={CreateProducts} />

                            <Route path="/admin/categories" exact component={Categories} />
                            <Route path="/admin/categories/create" component={CreateCategory} />

                            <Route path="/admin/users" exact component={Users} />
                        </div>
                    </div>
                </div>
            </Router>
        )
    };
};

export default Admin
