import React, { Component } from 'react'
import UserService from '../../services/user.service';
import './Users.scss'
import { Link } from 'react-router-dom';

export class Users extends Component {
constructor(props) {
    super(props);
    this.state = {
        users: []
    }
}

componentDidMount() {
    UserService
        .getAll()
        .then(res => res.json())
        .then(users => this.setState({users}))
}

    render() {
        return (
            <div className="users-admin">
                <h2>users</h2>
                <div className="d-flex justify-content-end">
                    <Link to='/admin/users/create' className="btn btn-primary">+</Link>
                </div>
                <table className="table table-striped table-dark col-sm-12">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return <tr key={user.id}>
                                <td>{user._id.substring(user._id.length-6)}</td>
                                <td>
                                    {/* <img className="user-image" src={'http://localhost:4000/user' + user.image} /> */}
                                    {user.name}
                                </td>
                                <td>{user.email}</td>
                                <td></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users
