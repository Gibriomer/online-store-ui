import React, { Component } from 'react'
import CartService from '../../services/cart.service';
import cart from '../../images/cart.png';


export class CartBut extends Component {
    
    

    updateBadge() {
        return CartService.getAll().length;
    }
    
    render() {
        return (
            <div>
                <img src={cart} alt="#" />
                <span className="badge badge-success">
                    {this.updateBadge()}
                </span>
            </div>
        )
    }
}

export default CartBut
