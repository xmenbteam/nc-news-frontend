import React from 'react';
import Voter from './Voter'

const Comments = ({ comments }) => {

    return (
        <div>
            {console.log(comments)}
            <ul className='comments__list'>
                {comments.map((comment) => {
                    return (
                        <li key={comment.comment_id}>
                            <h4>By {comment.author}:</h4>
                            <p className='comment__body'>{comment.body}</p>

                            <Voter comment_id={comment.comment_id} votes={comment.votes} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Comments;