import axios from 'axios';

const newsAPI = axios.create({
    baseURL: 'https://sams-first-news-app.herokuapp.com/api'
})

export const getArticles = () => {
    return newsAPI.get('/articles')
        .then(response => {
            console.log('response data', response.data)
            return response.data
        }
        )
}