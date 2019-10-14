import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import Product from '../../../models/product'
import CategoryServices from '../../../services/category.service'
import ProductService from '../../../services/product.service';

export class CreateProducts extends Component {

    constructor(props) {
        super(props);
        this.image = React.createRef();
        this.state = {
            categories: [],
            submitting: false
        };
    }

    componentDidMount() {
        CategoryServices
            .getAll()
            .then(res => res.json())
            .then(categories => {
                this.setState({ categories })
            });
    }

    send(values) {
        this.setState({submitting: true});
        ProductService.create(values)
            .then(() => {
                this.setState({submitting: false});
                this.props.history.push('/admin/products');
            });
    }

    render() {
        return (
            <div>
                <h1>products</h1>
                <div className="container">
                    <div className="container-register">
                        <h2>new product</h2>
                        <Formik
                            initialValues={{ title: '', price: '', categoryId: '', image: '' }}
                            validationSchema={Product}
                            onSubmit={this.send.bind(this)}
                            render={({setFieldValue}) => {
                                return <Form>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <Field type="text" name="title" className="form-control" placeholder="Title" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <Field type="text" name="price" className="form-control" placeholder="Price" />
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <Field type="select" name="categoryId" component="select" className="form-control" placeholder="Category">
                                            <option defaultValue>Choose category</option>
                                            {this.state.categories.map((category, index) => {
                                                return <option key={index} value={category.id}>{category.name}</option>
                                            })}
                                        </Field>
                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="file" name="image" className="form-control col-sm-8" onChange={(event) => {
                                            setFieldValue('image', event.currentTarget.files[0]);
                                        }} />
                                    </div>
                                    <div className='btn btn-success'>
                                        <input type="submit" 
                                                value="Submit" 
                                                disabled={this.state.submitting} />
                                    </div>
                                </Form>
                            }}>

                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProducts
