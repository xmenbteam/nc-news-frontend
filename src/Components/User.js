import { getSingleUser } from './API'
import '../App.css'
import React, { Component } from 'react';

class User extends Component {

    state = { user: {} }

    componentDidMount = () => {
        const { username } = this.props
        getSingleUser(username)
            .then(response => {
                this.setState({ user: response.data })
                console.log(response.data)
            })
    }
    render() {
        const { user } = this.state

        return (
            <div className='article__card'>
                <h2>{user.username}</h2>
                <p>Name: {user.name}</p>
                <img src={user.avatar_url} alt={user.name} />
            </div>
        );
    }
}

export default User;