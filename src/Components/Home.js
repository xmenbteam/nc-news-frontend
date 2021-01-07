import React from "react";
import "../App.css";
import samPic from "../Media/Sam-News-Pic.jpg";

const Home = () => {
  return (
    <div className="home__content">
      <h2 className="main__title">
        Searching the Web for the best news for YOU!
      </h2>

      <img className="picture" src={samPic} alt="finding you the news!"></img>
    </div>
  );
};

export default Home;
