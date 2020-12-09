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

export const voterGuy = (article_id) => {
    console.log(article_id, 'voterguyarticleid')
    return newsAPI.patch(`/articles/${article_id}`, { inc_votes: 1 })
        .then(response => {
            console.log(response, 'voterguy reposnse')
        })
}