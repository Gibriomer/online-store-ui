import React, { Component } from 'react'
import ProductService from '../../services/product.service';
import CartService from '../../services/cart.service';


import './Product.scss';

export class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            image: ""
        };
    }

    componentDidMount() {
        ProductService.getById(this.props.match.params.id)
            .then(res => res.json())
            .then(product => this.setState({ product }));
    }

    addTOCart() {
        CartService.add(this.state.product.id, 1)
    }

    render() {
        return (
            <div className="container container-products">
                <div className="card card-product">
                    <h5 className="card-header">{this.state.product.title}</h5>
                    <img src={this.state.product.image} alt="#" />
                    <div className="card-body">
                        <h5 className="card-title">{this.state.product.title}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text">{this.state.product.price}$</p>
                        <button className="btn btn-success"
                                onClick={this.addTOCart.bind(this)}>add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product

