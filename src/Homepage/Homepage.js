import React from 'react';
import Categories from './Categories/Categories';
import Potw from './Potw/Potw';
import NewProduct from './NewProduct/NewProduct';

import './Homepage.scss'

class Homepage extends React.Component {

	// constructor(props) {
	// 	super(props);
	// }


	render() {
		return (
			<div className="container homepage">
				<div className="content">
					<Potw />
					<NewProduct />
				</div>
			</div>
		);
	}
}

export default Homepage;