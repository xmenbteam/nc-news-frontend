import React, { Component } from 'react';

class Login extends Component {

    state = {
        userNameInput: '',
    }

    handleChange = (event) => {

        //can then put things in here that we have control over using JS eg. toCaps etc.
        const userName = event.target.value
        this.setState({ userNameInput: userName })
    }

    handleSubmit = (event) => {
        const { logUserIn } = this.props
        event.preventDefault()
        logUserIn(this.state.userNameInput)
    }

    render() {
        const { userNameInput } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label for="userName">What's Your Name?</label><br></br>
                    <input name='userName' type='text' value={userNameInput} placeholder='Username' onChange={this.handleChange}></input><br></br>
                    <button type='submit'>Log In</button><br></br>
                </form>
            </div>
        );
    }
}

export default Login;