import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router'
import Title from './Components/Title';
import Nav from './Components/Nav';
import Home from './Components/Home';
import ArticleList from './Components/ArticleList';
import Article from './Components/Article'
import Comments from './Components/Comments'

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Nav />
        <Router>
          <Home path='/' />
          <ArticleList path='/articles' />
          <Article path='/articles/:article_id' />
          <Comments path={`/articles/:article_id/comments`} />
        </Router>
      </div>
    );
  }
}

export default App; 