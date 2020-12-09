import React, { Component } from 'react';
import { voterGuy } from './API'

class Voter extends Component {

    state = { hasVoted: false, vote_change: 0 }

    handleClick = (increment) => {

        const { article_id, comment_id } = this.props;
        voterGuy(article_id, comment_id, increment);
        this.setState({ hasVoted: true, vote_change: increment });
    }
    render() {
        const { votes } = this.props
        const { vote_change, hasVoted } = this.state
        return (
            <div>
                <p>🔥 : {votes + vote_change}</p>
                <button onClick={() => this.handleClick(1)} disabled={hasVoted ? true : false}>🔥 it up!</button>
                <button onClick={() => this.handleClick(-1)} disabled={hasVoted ? true : false}>💦 it down!</button>
            </div>
        );
    }
}
export default Voter;