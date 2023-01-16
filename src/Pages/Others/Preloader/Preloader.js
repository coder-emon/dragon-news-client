import React from "react";
import loaderImg from "../../../assets/Loader.gif";
const Preloader = () => {
  return (
    <div className="d-flex align-item-center justfy-content-center">
      <img src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Preloader;
