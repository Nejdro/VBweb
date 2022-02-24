import React from "react";
import "./Home.css";
import Image from "../images/book.jpeg";
import { Link } from "react-router-dom";
import { dataItem } from "./dataItem";

class Home extends React.Component {
  render() {
    const items = dataItem.slice(0, 4).map((item) => (
      <div>
        <Link to={{ pathname: `/item/${item.ID}` }}>
          <img src={Image} alt="" />
        </Link>
        <p>
          <strong>{item.Title}</strong>
        </p>
      </div>
    ));
    return (
      <div>
        <div className="hero"></div>
        <div className="collection">
          <span id="heading">Collection</span>
          <Link to="/collection">
            <button id="seeAll">see all</button>
          </Link>
          <div class="grid">{items}</div>
        </div>
      </div>
    );
  }
}
export default Home;
