import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://sams-first-news-app.herokuapp.com/api'
})

export const getArticles = (sort_by, order) => {

    return newsAPI.get('/articles', {
        params: {
            sort_by,
            order
        }
    }).then(response => {
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

export const getCommentsByArticleId = (article_id, sort_by, order) => {
    return newsAPI.get(`/articles/${article_id}/comments`, {
        params: {
            sort_by,
            order
        }
    })
        .then(response => {
            return response.data
        })
}

export const posterGuy = (article_id, thingToPost) => {
    return newsAPI.post(`/articles/${article_id}`,
        thingToPost)
        .then(response => {
            return response
        }).catch(err => {
            console.dir(err)
        })
}

export const voterGuy = (article_id, comment_id, increment) => {

    if (article_id) {
        return newsAPI.patch(`/articles/${article_id}`, { inc_votes: increment })
            .then(response => {
                // console.log(response, 'voterguy reposnse')
            })
    } else if (comment_id) {
        return newsAPI.patch(`/comments/${comment_id}`, { inc_votes: increment })
            .then(response => {
                // console.log(response, 'voterguy reposnse')
            })
    }
}

export const getSingleUser = (username => {
    return newsAPI.get(`/users/${username}`)
        .then(response => {
            console.log('username response ---->', response)
            return response
        })
})