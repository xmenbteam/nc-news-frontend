import React, { Component } from 'react';
import { Link } from '@reach/router'
import { getArticleById, } from './API'
import '../App.css'
import Comments from './Comments'
import Voter from './Voter'

class Article extends Component {

    state = { article: {}, isLoading: true, showComments: false }

    componentDidMount = () => {
        getArticleById(this.props.article_id).then(article => {

            this.setState({ article: article, isLoading: false })
        })
    }
    commentShow = () => {
        this.state.showComments ? this.setState({ showComments: false }) :
            this.setState({ showComments: true })
    }



    render() {

        const { article, isLoading, showComments } = this.state
        const { userName } = this.props

        if (isLoading) return <p>LOADING BRO</p>
        else {
            return (
                <div className='article__card'>

                    <h2 className='article__title'>{article.title}</h2>
                    <h3 className='article___author'>By {article.author}</h3>
                    <p className='article__body'>{article.body}</p>
                    <p className='comments'>Comments: {article.comment_count}</p>

                    <p><Link to='/articles'>Back to Articles</Link></p>

                    <Voter article_id={article.article_id} votes={article.votes} />
                    <br></br>
                    <button onClick={this.commentShow}>{showComments ?
                        'Hide Comments' : 'Show Comments'}</button>
                    {showComments && <Comments userName={userName} article_id={article.article_id} />}
                </div>
            );
        }
    }
}

export default Article;