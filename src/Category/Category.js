import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ProductService from '../services/product.service';


import './Category.scss';

export class Category extends Component {
    constructor(props) {
        super(props);
        this.categoryId = this.props.match.params.id;
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        ProductService.getByCategoryId(this.props.match.params.id)
            .then(res => res.json())
            .then(products => this.setState({ products }));

    };

    render() {
        return (
            <div className="container">
                <div className="products row-sm-4">
                    {this.state.products.map((product, index) => {
                        return <Link to={`/category/${this.categoryId}/product/${product.id}`} className="product" key={index}>
                            <div className="card card-category">
                                <img src={'http://localhost:4000/products' + product.image} alt="#" />
                                <div className="card-body">
                                    <div className="card-title">{product.title}</div>
                                    <div className="price">{product.price}$</div>
                                    <Link to={`/category/${this.categoryId}/product/${product.id}`}
                                        className="product btn btn-success btn-product"
                                        key={index}>buy now</Link>
                                </div>
                            </div>
                        </Link>;
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Category
