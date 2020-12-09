import React, { Component } from 'react';
import { getArticles } from './API'
import { Link } from '@reach/router'
import Voter from './Voter'
import '../App.css'

class ArticleList extends Component {
    state = { articles: [], isLoading: true }

    componentDidMount = () => {
        getArticles().then(articles => {
            this.setState({ articles: articles, isLoading: false })
        })
    }

    render() {
        const { isLoading, articles } = this.state

        if (isLoading === true) {
            return <div>
                <h1>Loading bebe!</h1>
            </div>
        }
        else {
            return (
                <div className='articles'>
                    <h2>Articles</h2>
                    <ul className='article__list'>
                        {articles.map(article => {
                            return (

                                <li key={article.article_id} className='article__card'>

                                    <h3 className='article__card--title'><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3>
                                    <p className='article__card--element'>By {article.author}</p>
                                    <p className='article__card--element'>{article.topic}</p>
                                    <p className='article__card--element'>Created: {new Date(article.created_at).toDateString()} </p>
                                    <Voter article_id={article.article_id} votes={article.votes} />
                                    <p className='article_card--element'> Comments: {article.comment_count}</p>

                                </li>
                            )
                        })}
                    </ul>
                </div>
            );
        }
    }
}

export default ArticleList;