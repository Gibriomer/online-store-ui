import React, { Component } from 'react'
import cart from '../../images/cart.png';
import {connect} from 'react-redux';


export class CartBut extends Component {
    
    
    render() {
        return (
            <div>
                <img src={cart} alt="#" />
                <span className="badge badge-success">
                    {this.props.ItemsCount}
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ItemsCount: state.cartItemsCount
    }
}

export default connect(mapStateToProps)(CartBut);
