import React, { Component } from 'react'
import CategoryService from '../../services/category.service';
import './Categories.scss'
import { Link } from 'react-router-dom';

export class Categories extends Component {
constructor(props) {
    super(props);
    this.state = {
        categories: []
    }
}

componentDidMount() {
    CategoryService
        .getAll()
        .then(res => res.json())
        .then(categories => this.setState({categories}))
}

    render() {
        return (
            <div>
                <h2>Categories</h2>
                <div className="d-flex justify-content-end">
                    <Link to='/admin/Categories/create' className="btn btn-primary">+</Link>
                </div>
                <table className="table table-striped table-dark col-sm-12">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.categories.map(category => {
                            return <tr key={category.id}>
                                <td>{category.id.substring(category.id.length-6)}</td>
                                <td>
                                    {/* <img className="category-image" src={'http://localhost:4000/category' + category.image} /> */}
                                    {category.name}
                                </td>
                                <td></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Categories
