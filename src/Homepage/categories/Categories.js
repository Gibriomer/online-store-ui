import React from 'react';
import CategoryService from '../../services/category.service';
import {BrowserRouter as Link, Route} from 'react-router-dom';
import Category from '../../Category/Category';

import './categories.scss'

class Categories extends React.Component {

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
			.then(categories => {
				this.setState({ categories });
			});
	}

	render() {
		return (
			<div className="container-categories">
				<div className="categories">
					{this.state.categories.map((category, i) => {
						return <Link to={'/category/' + category.id}
							className="category"
							key={i}>{category.name}</Link>
					})}
				</div>
				<div>
					<Route path="/category/:id" exact component={Category} />
				</div>
			</div>
		);
	}
}

export default Categories
