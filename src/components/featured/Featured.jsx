import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>print</span><br /> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='Try "building mobil app"' />
            </div>
            <button>Search</button>
          </div>
        </div>
        <div className="right">
          <div className="front">
          <img className="front" src="./img/front.png" alt="" />
          </div>
          <div className="back">
          <img className="back" src="./img/back.png" alt="" />
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Featured;
