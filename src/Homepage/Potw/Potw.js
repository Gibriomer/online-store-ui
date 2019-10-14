import React, { Component } from 'react'
import {Link} from "react-router-dom";
// import ProductService from '../../services/product.service';

import './Potw.scss';

export class Potw extends Component {
    
    // componentDidMount() {
    //     const potwPrice = 0;
    //     ProductService.getAll().map(product => {
    //         if(product.price > potwPrice) {
    //             potwPrice = product.price;
    //         }
    //     })
    //     .then(product => product.json())
    // }
    
    render() {
        return (
            <div className="potw">
                <div className="card">
                    <h5 className="card-header">Product of the week!</h5>
                    <div className="container card-container">
                        <div className="card-body">
                            <div className="card-title">Bicycle poker cards</div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div className="before-price">25$</div>
                            <div className="price">now only 18$</div>
                            <Link to="/product/:id" className="btn btn-success">buy now</Link>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIlZEWWZdrTxKl-KfjixVk_WHTjdErWXbYusoV4XvzmuTQgMR" alt="..." />
                    </div>
                </div>
            </div>
        )
    }
}

export default Potw;
