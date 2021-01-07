import React from "react";
import Loader from "react-loader-spinner";
import "../App.css";

const Loading = () => {
  return (
    <div className="loader">
      <Loader type="Puff" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Loading;
