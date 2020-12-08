import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://sams-first-news-app.herokuapp.com/api'
})

export const getArticles = () => {
    return newsAPI.get('/articles')
        .then(response => {
            // console.log('response data', response.data)
            return response.data
        }
        )
}

export const getArticleById = (article_id) => {
    return newsAPI.get(`/articles/${article_id}`)
        .then(response => {
            // console.log('articlebyid', response.data.article)
            return response.data.article
        })
}

export const getCommentsByArticleId = (article_id) => {
    return newsAPI.get(`/articles/${article_id}/comments`)
        .then(response => {
            return response.data
        })
}