import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Dropdown, ButtonGroup } from 'react-bootstrap';

import './Header.scss';
import CartBut from './CartBut/CartBut';
import Cart from '../Cart/Cart';
import login from '../images/login.png';
import signUp from '../images/sign-up.png';
import profile from '../images/profile.png';
import cookie from 'react-cookies';



class Header extends Component {

    constructor(props) {
        super(props);
    }

    logout() {
        cookie.remove('user');
    }

    render() {
        return (
            <div className="sticky-top">
                <header className="header">
                    <Link to="/" className="btn btn-outline-light head-line">ALL-IN cheap</Link>
                    <ul>
                        <li>
                            <Dropdown as={ButtonGroup} drop="left" className="btn btn-outline-light cart-button">
                                <Dropdown.Toggle className="dropdown-dark ">
                                    <div><CartBut /></div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="btn btn-outline-light dropdown-dark">
                                    <Cart />
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li>
                            <Link to="/login" className="btn btn-outline-light">
                                <img src={login} alt="#" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="btn btn-outline-light">
                                <img src={signUp} alt="#" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/Profile" className="btn btn-outline-light">
                                <img src={profile} alt="#" />
                            </Link>
                        </li>
                        <li>
                            <button onClick={this.logout.bind(this)}>Logout</button>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default Header



