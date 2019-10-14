import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserService from '../services/user.service';
import User from '../models/User';

export class Register extends React.Component {
    
    constructor(props) {
        super(props);
        this.state= {
            submitting: false
        };
    }

    send(values) {
        this.setState({submitting:true})
        UserService
            .register(values)
            .then(() => {
                this.setState({submitting:false})
                this.props.history.push('/login')
        })
    }

    
  
    
    render() {
        return (
                <div className="container">
                    <div className="container-register">
                    <h2>Register now</h2>
                        <Formik 
                            onSubmit={this.send.bind(this)}
                            initialValues={{name: '', email: '', password: '', age: '', passwordConfirm: ''}}
                            validationSchema={User}>
                            <Form>
                                <div className="form-group">
                                    <Field type="text" name="name" className="form-control" placeholder="Name" />
                                    <ErrorMessage name="name" component="div" className="alert alert-danger"/>
                                </div>
                                <div className="form-group">
                                    <Field type="text" name="email" className="form-control" placeholder="E-mail" />
                                    <ErrorMessage name="email" component="div" className="alert alert-danger" />
                                </div>
                                <div className="form-group">
                                    <Field type="text" name="password" className="form-control" placeholder="Password" />
                                    <ErrorMessage name="password" component="div" className="alert alert-danger" />
                                </div>
                                {/* <div className="form-group">
                                    Repet password <Field type="text" name="confrimPassword" className="form-control" placeholder="repet password" />
                                    <ErrorMessage name="confrimPassword" component="div" className="alert alert-danger" />
                                </div> */}
                                <div className="form-group">
                                    <Field type="text" name="age" className="form-control" placeholder="Age" />
                                    <ErrorMessage name="age" component="div" className="alert alert-danger" />
                                </div>
                                <div>
                                    <input className='btn btn-success' type="submit" value="Submit" disabled={this.state.submitting} />
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
        );
    }
}

export default Register;
