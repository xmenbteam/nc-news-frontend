import React, { Component } from 'react';
import { Link } from '@reach/router'
import { getArticleById, getCommentsByArticleId } from './API'
// import Comments from './Comments'

class Article extends Component {

    state = { article: {}, comments: {}, isLoading: true }

    componentDidMount = () => {
        getArticleById(this.props.article_id).then(article => {
            // console.log(article, 'article')
            this.setState({ article: article, isLoading: false })
        })

        getCommentsByArticleId(this.props.article_id).then(comments => {
            this.setState({ comments })
        })
    }

    render() {
        const { article, comments } = this.state
        console.log(this.state, 'comments in state')
        return (
            <div>
                <h2 className='article__title'>{article.title}</h2>
                <h3 className='article___author'>By {article.author}</h3>
                <p className='article__body'>{article.body}</p>
                <p className='votes'>Current Votes: {article.votes}</p>

                <p><Link to='/articles'>Back to Articles</Link></p>
            </div>
        );
    }
}

export default Article;