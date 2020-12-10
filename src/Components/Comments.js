import Voter from './Voter'
import { getCommentsByArticleId } from './API'
import Sorter from './Sorter'
import React, { Component } from 'react';

class Comments extends Component {

    state = { comments: [], sort_by: 'created_at', order: 'asc' }

    componentDidMount = () => {
        const { article_id } = this.props

        getCommentsByArticleId(article_id).then(comments => {
            this.setState({ comments })
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { sort_by, order } = this.state
        const { article_id } = this.props
        console.log('CDU--->', article_id)
        const newSortBy = prevState.sort_by !== sort_by
        const newOrder = prevState.order !== order
        if (newSortBy || newOrder) getCommentsByArticleId(article_id, sort_by, order).then(response => {
            this.setState({ comments: response })
        })
    }

    sorterFunc = (sort_by, order) => {
        this.setState({ sort_by: sort_by, order: order })
    }

    render() {
        const { comments } = this.props
        const { sort_by, order } = this.state
        return (
            <div>

                <Sorter sorterFunc={this.sorterFunc} sort_by={sort_by} order={order} />
                <ul className='comments__list'>
                    {comments.map((comment) => {
                        return (
                            <li key={comment.comment_id}>
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

export default Comments;