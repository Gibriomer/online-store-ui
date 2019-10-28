import React, { Component } from 'react'
import CartService from '../services/cart.service';
import ProductService from '../services/product.service'
import { Switch, Route, Link } from "react-router-dom";
import Payment from './Payment/Payment';


import waste from '../images/waste.png';
import claerCart from '../images/claer_cart.png';

import './Cart.scss';

export class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };


    }

    loadCart() {
        const cartProducts = CartService.getAll();
        const ids = CartService.getAll().map(product => product.id);
        ProductService.getByIds(ids)
            .then(res => res.json())
            .then(products => {
                products = this.addQuantities(products, cartProducts);
                this.setState({ products })
            })
            .catch(error => console.log(error));
    }

    addQuantities(products, cartProducts) {
        let cartObj = {};
        cartProducts.forEach(product => cartObj[product.id] = product.qty);
        products.forEach(product => product.qty = cartObj[product.id]);
        return products;
    }

    calcTotal(products) {
        let total = 0;
        this.state.products.forEach(product => {
            total += product.qty * product.price;
        });
        return total;
    }

    remove(productId) {
        CartService.remove(productId);
        this.loadCart();
    }

    clearAll(cookie) {
        CartService.clearAll(cookie);
        this.loadCart();
    }

    componentDidMount() {
        this.loadCart();
    }


    render() {
        return (
            <div className="container cart">
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sub-Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product, index) => {
                            return <tr key={index}>
                                <td>{product.title}</td>
                                <td>${product.price.toFixed(2)}</td>
                                <td>{product.qty}</td>
                                <td>${(product.price * product.qty).toFixed(2)}</td>
                                <td>
                                    <button className="btn btn-danger btn-trash" onClick={this.remove.bind(this, product.id)}>
                                        <img src={waste} alt="#" />
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2"></td>
                            <td>
                                <Link to="/cart/payment"><button className="btn btn-success">Checkout</button></Link>
                            </td>
                            <td>total: ${this.calcTotal(this.state.products).toFixed(2)}</td>
                            <td>
                                <button className="btn btn-dark btn-trash" onClick={this.clearAll.bind(this)}>
                                    <img src={claerCart} alt="#" />
                                </button>
                            </td>

                        </tr>
                    </tfoot>
                </table>
                <div>
                    <Route path="/cart/payment" exact component={Payment} />
                </div>

            </div>
        )
    }
}

export default Cart
