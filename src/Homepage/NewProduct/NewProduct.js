import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';

import './NewProduct.scss';

export class NewProduct extends Component {
    render() {
        return (
            <div className="products-carousel">
                <h1>New products</h1>
                {/* <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTR-XdVKiFE6zM4O_OR7sveEDchdx5oDFJYfV1mdbCnUhGicUv6ZuXBqbkC0rGRCu6MyDdHCOt_gwulHiOGBbfi-l_bBdOcQwsBSB8OWw5_5aiNxz2FEVM&usqp=CAE"
                            alt="First slide"
                        />
                        <Carousel.Caption className="product-info">
                            <h3>Eclipse chips</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSGZg1NhefBqM5GeJJghqR_2TsjB1F1PwnNottPa5Y11pe2imQSde3hUpBBhMZ6myFwVXnZnd4ZGf31VCkI323Vyvw6kOzd5AKrqvfj7dIl8h6iyjGvBiP9&usqp=CAE"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="product-info">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRydxy43UJ6fiDOkiNtsNJVHaoFai0amOP5vJ09LV7DsOK1Q17uZHFR-hnhLKAev0MLxOn_zait6xb6wtRxMmgMYX_8xsPclSzSmETDa4mrDRqjz2kWH611yw&usqp=CAE"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="product-info">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div> */}


                <div className="new-product">
                    <div className="card">
                        <h5 className="card-header">New products</h5>
                        <div className="container card-container">
                            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTOvJM5yMLbESlMraofYID_zbKJiayYUaBGGpt-ZAKbZRFJr5WOz8qDd4gIu0__ymHSoZdnVwqdfIFw6hTdF28OwkvaT4fp7RvyEdDTpSP-w1_694uTDd_Q&usqp=CAE" alt="..." />
                            <div className="card-body">
                                <div className="card-title">Eclipse chips</div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="price">22$$</div>
                                <Link to="/product/:id" className="btn btn-success">buy now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewProduct
