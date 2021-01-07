import "./App.css";
import React, { Component } from "react";
import { Router } from "@reach/router";
import Title from "./Components/Title";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import ArticleList from "./Components/ArticleList";
import Article from "./Components/Article";
import Login from "./Components/Login";
import Comments from "./Components/Comments";
import User from "./Components/User";

class App extends Component {
  state = {
    loggedInUser: "",
    userName: "grumpy19",
  };

  logUserIn = (newUserName) => {
    this.setState({ loggedInUser: newUserName });
  };

  logUserOut = () => {
    this.setState({ loggedInUser: "" });
  };

  render() {
    const { loggedInUser, userName } = this.state;

    return (
      <div className="body">
        {loggedInUser.length > 0 ? (
          <div>
            <Title
              userName="grumpy19"
              loggedInUser={loggedInUser}
              logUserOut={this.logUserOut}
            />
            <Nav />
            <Router>
              <Home path="/" />
              <ArticleList path="/articles" />
              <Article path="/articles/:article_id" userName={userName} />
              <Comments path={`/articles/:article_id/comments`} />
              <User path="/user" username={userName} />
            </Router>
          </div>
        ) : (
          <div>
            <Title loggedInUser={loggedInUser} />
            <h2> Log in to see the news!</h2>
            <Login logUserIn={this.logUserIn} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
