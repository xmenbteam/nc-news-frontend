import React, { Component } from 'react';
import { voterGuy } from './API'

class Voter extends Component {

    state = { hasvoted: false, vote_change: 0 }

    handleClick = (event) => {
        const { article_id } = this.props;
        voterGuy(article_id);
        this.setState({ hasVoted: true, vote_change: 1 });
    }
    render() {
        const { votes } = this.props
        const { vote_change } = this.state
        return (
            <div>
                <p>Votes: {votes + vote_change}</p>
                <button onClick={this.handleClick} >Upvote!</button>
            </div>
        );
    }
}
export default Voter;