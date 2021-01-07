import React, { Component } from "react";
import Voter from "./Voter";
import Poster from "./Poster";
import Paginator from "./Paginator";
import Loading from "./Loading";
import { getCommentsByArticleId } from "./API";

class Comments extends Component {
  state = { comments: [], isLoading: true, currentPage: 1, postsPerPage: 10 };

  componentDidMount = () => {
    getCommentsByArticleId(this.props.article_id).then((comments) => {
      this.setState({ comments: comments, isLoading: false });
    });
  };

  updateComments = (userName, body) => {
    const newComment = {
      author: userName,
      body,
      created_at: new Date(),
      votes: 0,
    };
    this.setState((currentState) => {
      return {
        comments: [newComment, ...currentState.comments],
      };
    });
  };

  render() {
    const { article_id, userName } = this.props;
    const { comments, isLoading, currentPage, postsPerPage } = this.state;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = comments.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (currentPage) => {
      this.setState({ currentPage });
    };

    if (isLoading) return <Loading />;
    else {
      return (
        <div>
          <Poster
            updateComments={this.updateComments}
            userName={userName}
            article_id={article_id}
          />
          <Paginator
            currentPage={currentPage}
            postsPerPage={postsPerPage}
            totalPosts={comments.length}
            paginate={paginate}
          />
          <ul className="comments__list">
            {currentPosts.map((comment) => {
              return (
                <li className="article__card" key={comment.comment_id}>
                  <h4>By {comment.author}:</h4>
                  <p className="comment__body">{comment.body}</p>
                  <p className="article__card--element">
                    Created: {new Date(comment.created_at).toDateString()} at{" "}
                    {new Date(comment.created_at).toTimeString()}{" "}
                  </p>

                  <Voter
                    comment_id={comment.comment_id}
                    votes={comment.votes}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

export default Comments;
