import React, { Component } from "react";
import "./Collection.css";
import { Link } from "react-router-dom";
import { dataItem } from "./dataItem";

class Collection extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="hero2">
            <h1 id="title">Collection</h1>
          </div>
          <span className="path">
            <Link
              to="/"
              style={{ textDecoration: "underline", color: "#9d9d9d" }}
            >
              Home
            </Link>
            {"\u00A0"}/{"\u00A0"}
            <Link
              to="/collection"
              style={{ textDecoration: "underline", color: "#9d9d9d" }}
            >
              Collection
            </Link>
            {"\u00A0"}/{"\u00A0"}About
          </span>
        </div>
        <div className="gallery">
          <div class="grid">
            {dataItem.map((item, index) => (
              <div>
                <Link
                  to={{ pathname: `/item/${item.ID}`, state: { item } }}
                  key={index}
                >
                  <img src={item.Poster} class="" alt="" title={item.ID} />
                </Link>
                <figcaption>{item.Title}</figcaption>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
