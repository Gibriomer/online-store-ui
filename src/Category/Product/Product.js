import React, { Component } from 'react';
import ProductService from '../../services/product.service';
import { connect } from 'react-redux';
import {addToCart} from '../../redux/actions';

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

    addToCart() {
        this.props.addToCart(this.state.product.id);
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
                                onClick={this.addToCart.bind(this)}>add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, {
    addToCart
})(Product)

