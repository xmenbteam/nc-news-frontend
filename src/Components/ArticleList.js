import React, { Component } from 'react';
import { getArticles } from './API'
import { Link } from '@reach/router'

class ArticleList extends Component {
    state = { articles: [], isLoading: true }

    componentDidMount = () => {
        getArticles().then(articles => {
            this.setState({ articles: articles, isLoading: false })
        })
    }

    render() {
        if (this.state.isLoading === true) {
            return <div>
                <h1>Loading bebe!</h1>
            </div>
        }
        else {
            return (
                <div>
                    <h2>Welcome to Articles!</h2>
                    <ul className='article__card'>
                        {this.state.articles.map(article => {
                            return (
                                <li key={article.article_id}>
                                    <h3 className='article__card--title'><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3>
                                    <p className='article__author'>By {article.author}</p>
                                    <p className='article__topic'>{article.topic}</p>
                                    <p className='article__created'>Created {article.created_at} </p>
                                    <p className='article_comment_count'> Comments: {article.comment_count}</p>
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