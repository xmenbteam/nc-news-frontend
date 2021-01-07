import { getSingleUser } from "./API";
import "../App.css";
import React, { Component } from "react";
import Loading from "./Loading";

class User extends Component {
  state = { user: {}, isLoading: true };

  componentDidMount = () => {
    const { username } = this.props;
    getSingleUser(username).then((response) => {
      this.setState({ user: response.data, isLoading: false });
      console.log(response.data);
    });
  };
  render() {
    const { user, isLoading } = this.state;

    if (isLoading === true) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="article__card">
          <h2>{user.username}</h2>
          <p>Name: {user.name}</p>
          <img src={user.avatar_url} alt={user.name} />
        </div>
      );
    }
  }
}

export default User;
