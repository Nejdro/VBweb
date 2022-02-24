import React, { Component } from "react";
import { dataItem } from "./dataItem";
import { useParams, Link } from "react-router-dom";
import "./Item.css";

function Item() {
  const { id } = useParams();
  const item = dataItem.find((item) => item.ID === id);
  return (
    <div>
      <div className="ItemHead">
        <span id="path2">
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
          {"\u00A0"}/{"\u00A0"}Collection Item
        </span>
      </div>

      <div className="ColBod">
        <span className="category">{item.Title}</span>
        <div className="Poster">
          <img src={item.Poster} alt="" />
        </div>
        <div className="Info">
          <span className="sectitle">Section Title</span>
          <p>{item.Description}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
