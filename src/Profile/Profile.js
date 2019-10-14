import React from 'react';
import UserService from '../services/user.service';
import './Profile.scss';

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	componentDidMount() {
		UserService
			.me()
			.then(response => response.json())
			.then(user => {
				this.setState({
					user: user
				});
			});
	}

	render() {
		return (
			<div className="container">
				<div className="profile">
					<div>
						<img className="profile-image" 
							 src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQJR6BqqLi6y004j182y-DQqexGNssQn5AHlZ7DUBXpYQe3H7P'}
							 alt="#"/>
					</div>
					<div className="profile-body">
						<h3>{this.state.user.name}</h3>
						<p>{this.state.user.email}</p>
						<p>{this.state.user.age}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;