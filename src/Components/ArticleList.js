import React, { Component } from 'react';
import { getArticles } from './API'
import { Link } from '@reach/router'
import Voter from './Voter'
import Sorter from './Sorter'
import '../App.css'

class ArticleList extends Component {
    state = { articles: [], isLoading: true, sort_by: 'created_at', order: 'desc' }

    componentDidMount = () => {
        getArticles().then(articles => {
            this.setState({ articles, isLoading: false })
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { sort_by, order } = this.state
        const newSortBy = prevState.sort_by !== sort_by
        const newOrder = prevState.order !== order
        if (newSortBy || newOrder) getArticles(sort_by, order).then(response => {
            this.setState({ articles: response })
        })
    }

    sorterFunc = (sort_by, order) => {

        this.setState({ sort_by: sort_by, order: order })
    }

    render() {
        const { isLoading, articles, sort_by, order } = this.state

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
                        <Sorter sorterFunc={this.sorterFunc} sort_by={sort_by} order={order} />

                        {articles.map(article => {
                            return (

                                <li key={article.article_id} className='article__card'>

                                    <h3 className='article__card--title'><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3>
                                    <p className='article__card--element'>By {article.author}</p>
                                    <p className='article__card--element'>{article.topic}</p>
                                    <p className='article__card--element'>Created: {new Date(article.created_at).toDateString()} at {new Date(article.created_at).toTimeString()} </p>
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