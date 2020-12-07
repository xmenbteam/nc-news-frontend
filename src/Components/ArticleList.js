import React, { Component } from 'react';
import { getArticles } from './API'

class ArticleList extends Component {
    state = { articles: [] }

    componentDidMount = () => {
        getArticles().then(articles => {
            this.setState({ articles: articles })
        })
    }

    render() {
        return (
            <div>
                <h2>Welcome to Articles!</h2>
                <ul className='article__card'>
                    {this.state.articles.map(article => {
                        return (
                            <li>
                                <h3 className='article__card--title'>{article.title}</h3>
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

export default ArticleList;