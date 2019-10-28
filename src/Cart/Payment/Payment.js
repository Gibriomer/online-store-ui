import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class Payment extends Component {

    render() {
        return (
            <div>
                <Formik
                    initialValues={{ cardNum: '', expoDate: '', cvc: '' }}>
                    <Form>
                        <div className="form-group">
                            <Field type="number" name="cardNum" className="form-control" placeholder="Card number here" />
                            <ErrorMessage name="cardNum" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="date" name="expoDate" className="form-control" placeholder="Expiration date" />
                            <ErrorMessage name="expoDate" component="div" className="alert alert-danger" />
                        </div>
                        <div className="form-group">
                            <Field type="number" name="cvc" className="form-control" placeholder="CVC" />
                            <ErrorMessage name="cvc" component="div" className="alert alert-danger" />
                        </div>
                        <div>
                            <input className='btn btn-success' type="submit" value="Pay" />
                        </div>
                    </Form>
                </Formik>
            </div>
        );
    }
}


export default Payment
