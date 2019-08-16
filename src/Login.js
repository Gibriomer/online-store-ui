import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import User from './models/User';

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    send(values) {
        fetch('http://localhost:4000/api/user', {
            method: 'GET',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <Formik 
                    onSubmit={this.send.bind(this)}
                    initialValues={{email: '', password: ''}}
                    validationSchema={User}>
                    <Form>
                        <div className="form-group">
                            E-mail: <Field type="text" name="email" className="form-control" />
                            <ErrorMessage name="email" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            Password: <Field type="text" name="password" className="form-control" />
                            <ErrorMessage name="name" component="div" className="alert alert-danger"/>
                        </div>
                        <div>
                            <input className='btn btn-success' type="submit" value="Login" />
                        </div>
                    </Form>
                </Formik>
            </div>
        )
    }
}

export default Login
