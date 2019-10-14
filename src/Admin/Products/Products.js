import React, { Component } from 'react'
import productService from '../../services/product.service';
import './Products.scss'
import { Link } from 'react-router-dom';

export class Products extends Component {
constructor(props) {
    super(props);
    this.state = {
        products: []
    }
}

componentDidMount() {
    productService
        .getAll()
        .then(res => res.json())
        .then(products => this.setState({products}))
}

    render() {
        return (
            <div>
                <h2>products</h2>
                <div className="d-flex justify-content-end">
                    <Link to='/admin/products/create' className="btn btn-primary">+</Link>
                </div>
                <table className="table table-striped table-dark col-sm-12">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(product => {
                            return <tr key={product.id}>
                                <td>{product.id.substring(product.id.length-6)}</td>
                                <td>
                                <img className="product-image" src={'http://localhost:4000/product' + product.image} alt="#"/>
                                    {product.title}
                                </td>
                                <td>${product.price.toFixed(2)}</td>
                                <td></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Products
