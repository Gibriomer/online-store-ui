import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Category from '../../../models/category';
import CategoryService from '../../../services/category.service';
// import ProductService from '../../../services/product.service';

export class CreateCategory extends Component {

    constructor(props) {
        super(props);
        this.image = React.createRef();
        this.state = {
            submitting: false
        };
    }

    // componentDidMount() {
    //     CategoryServices
    //         .getAll()
    //         .then(res => res.json())
    //         .then(categories => {
    //             this.setState({ categories })
    //         });
    // }

    send(values) {
        this.setState({submitting: true});
        CategoryService.create(values)
            .then(() => {
                this.setState({submitting: false});
                this.props.history.push('/admin/categories');
            });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="container-register">
                        <h2>new category</h2>
                        <Formik
                            initialValues={{ name: '', image: '' }}
                            validationSchema={Category}
                            onSubmit={this.send.bind(this)}>
                                <Form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <Field type="text" name="name" className="form-control" placeholder="Name" />
                                    </div>
                                    <div className='btn btn-success'>
                                        <input type="submit" 
                                                value="Submit" 
                                                disabled={this.state.submitting} />
                                    </div>
                                </Form>
                            

                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCategory
