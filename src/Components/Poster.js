import React, { Component } from 'react';
import { posterGuy } from './API'


class Poster extends Component {

    state = {
        body: '',
    }

    handleChange = (event) => {
        const body = event.target.value
        this.setState({ body })
    }

    handleSubmit = (event) => {

        const { userName, article_id, updateComments } = this.props
        const { body } = this.state;

        event.preventDefault();
        posterGuy(article_id, { username: userName, body: body })
        updateComments(userName, body)


    }

    render() {
        const { userName } = this.props
        const { body } = this.state
        return (
            <div>
                <h3>Post a Comment!</h3>
                <p className='comments--subtitle'>You are posting as {userName}</p>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        rows='10'
                        className='comment__box'
                        name='comment'
                        value={body}
                        onChange={this.handleChange}
                        placeholder='Type your Comment Here'></textarea><br></br>
                    <button type='submit'>Submit!</button>
                </form>
            </div>
        );
    }
}

export default Poster;