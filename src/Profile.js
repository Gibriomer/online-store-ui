import React, { Component } from 'react'

export class Profile extends Component {
   
    componentDidMount() {
        const token = document.cookie.split('user=')[1];
        fetch('http://localhost:4000/api/user/me', {
            headers: {
                'content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(response => response.json())
            .then(user => {
                console.log(user);
            })
    }
   
   
    render() {
        return (
            <div>
                <h2>user</h2>
            </div>
        )
    }
}

export default Profile
