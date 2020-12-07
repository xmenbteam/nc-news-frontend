import './App.css';
import React, { Component } from 'react';
import { Router } from '@reach/router'
import Title from './Components/Title';
import Nav from './Components/Nav';
import Home from './Components/Home';
import ArticleList from './Components/ArticleList';

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Nav />
        <Router>
          <Home path='/' />
          <ArticleList path='/articles' />
        </Router>
      </div>
    );
  }
}

export default App; 