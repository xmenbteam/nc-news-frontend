import React from 'react';
import Voter from './Voter'
import Poster from './Poster'

const Comments = (props) => {

    const { comments, article_id } = props

    return (
        <div>
            <Poster article_id={article_id} />
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

export default Comments;
