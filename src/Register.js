import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import User from './models/User';

export class Register extends React.Component {
    
    constructor(props) {
        super(props);
    }

    send(values) {
        fetch('http://localhost:4000/api/user', {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.props.history.push('./login');
        });
    }

    
  
    
    render() {
        return (
                <div className="container">
                    <div>
                    <h2>Register now</h2>
                        <Formik 
                            onSubmit={this.send.bind(this)}
                            initialValues={{name: '', email: '', password: '', age: '', passwordConfirm: ''}}
                            validationSchema={User}>
                            <Form>
                                <div className="form-group">
                                    Name <Field type="text" name="name" className="form-control" />
                                    <ErrorMessage name="name" component="div" className="alert alert-danger"/>
                                </div>
                                <div className="form-group">
                                    E-mail <Field type="text" name="email" className="form-control" />
                                    <ErrorMessage name="email" component="div" className="alert alert-danger" />
                                </div>
                                <div className="form-group">
                                    Password<Field type="text" name="password" className="form-control" />
                                    <ErrorMessage name="password" component="div" className="alert alert-danger" />
                                </div>
                                {/* <div className="form-group">
                                    Repet password <Field type="text" name="confrimPassword" className="form-control" placeHolder="repet password" />
                                    <ErrorMessage name="confrimPassword" component="div" className="alert alert-danger" />
                                </div> */}
                                <div className="form-group">
                                    Age <Field type="text" name="age" className="form-control" />
                                    <ErrorMessage name="age" component="div" className="alert alert-danger" />
                                </div>
                                <div>
                                    <input className='btn btn-success' type="submit" value="Submit" />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
        );
    }
}

export default Register;
