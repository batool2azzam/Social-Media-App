import React from "react";
import "./Explore.css";
import TwitterIcon from "../../assets/images/logo.png";
import SearchIcon from "../../assets/images/like.png";

const Explore: React.FC = () => {
  return (
    <div className="explore-container">
      <img src={TwitterIcon} alt="Twitter" className="twitter-icon" />
      <input type="text" placeholder="#Explore" className="explore-input" />
      <button className="search-button">
        <img src={SearchIcon} alt="Search" className="search-icon" />
      </button>
    </div>
  );
};

export default Explore;
