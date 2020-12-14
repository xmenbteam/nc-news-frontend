import React, { Component } from 'react';
import Voter from './Voter'
import Poster from './Poster'
import { getCommentsByArticleId } from './API'


class Comments extends Component {

    state = { comments: [], isLoading: true }

    componentDidMount = () => {

        getCommentsByArticleId(this.props.article_id).then(comments => {
            this.setState({ comments: comments, isLoading: false })
        })
    }

    updateComments = (userName, body) => {
        const newComment = { author: userName, body, created_at: new Date(), votes: 0 }
        this.setState(currentState => {
            return {
                comments: [newComment, ...currentState.comments]
            }
        })
    }

    render() {

        const { article_id, userName } = this.props
        const { comments, isLoading } = this.state

        if (isLoading) return <p>LOADING BRO</p>
        else {
            return (
                <div>
                    <Poster updateComments={this.updateComments} userName={userName} article_id={article_id} />
                    <ul className='comments__list'>
                        {comments.map((comment) => {
                            return (
                                <li className='article__card' key={comment.comment_id}>
                                    <h4>By {comment.author}:</h4>
                                    <p className='comment__body'>{comment.body}</p>
                                    <p className='article__card--element'>Created: {new Date(comment.created_at).toDateString()} at {new Date(comment.created_at).toTimeString()} </p>

                                    <Voter comment_id={comment.comment_id} votes={comment.votes} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
        }
    }
}


export default Comments;