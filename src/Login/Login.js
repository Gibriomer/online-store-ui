import React, { Component } from 'react';
import cookie from 'react-cookies'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import UserService from '../services/user.service';

import './Login.scss';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state= {
            submitting: false
        };
    }

    send(values) {
        this.setState({submitting: true})
		UserService
			.login(values.email, values.password)
			.then(response => response.json())
			.then(response => {
                const twoWeeksTime = 60 * 60 * 24 * 14;
                cookie.save('userId', response.token, { path: '/', maxAge: twoWeeksTime})
                this.setState({submitting: false})
				this.props.history.push('/');
			})
			.catch(err => console.log(err));
	}

    render() {
        return (
            <div className="container"> 
                <div className="container-register">
                    <h2>Login</h2>
                    <Formik 
                        initialValues={{email: '', password: ''}}
                        onSubmit={this.send.bind(this)}>
                        
                        <Form>
                            <div className="form-group">
                                <Field type="text" name="email" className="form-control" placeholder="E-mail" />
                                <ErrorMessage name="email" component="div" className="alert alert-danger" />
                            </div>
                            <div className="form-group">
                                <Field type="text" name="password" className="form-control" placeholder="Password" />
                                <ErrorMessage name="name" component="div" className="alert alert-danger"/>
                            </div>
                            <div>
                                <input className='btn btn-success' type="submit" value="Login" disabled={this.state.submitting} />
                            </div>
                            <div>
                                <Link to="/register" className="btn btn-light btn-register" >didnt register yet?</Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>   
        )
    }
}

export default Login
