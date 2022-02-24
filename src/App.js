import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Collection from "./components/pages/Collection";
import Item from "./components/pages/Item";
import Navbar from "./components/inc/Navbar";

function App() {
  const [items] = useState([
    {
      Title: "Collection item 1",
      ID: "1",
      Type: "item",
      Poster:
        "https://laclassefrancaise.es/wp-content/uploads/2021/10/Duolingo-presenta-su-podcast-para-aprender-frances-1200x1200.jpeg",
    },
    {
      Title: "Collection item 2",
      ID: "2",
      Type: "item",
      Poster:
        "https://laclassefrancaise.es/wp-content/uploads/2021/10/Duolingo-presenta-su-podcast-para-aprender-frances-1200x1200.jpeg",
    },
    {
      Title: "Collection item 3",
      ID: "3",
      Type: "item",
      Poster:
        "https://laclassefrancaise.es/wp-content/uploads/2021/10/Duolingo-presenta-su-podcast-para-aprender-frances-1200x1200.jpeg",
    },
    {
      Title: "Collection item 4",
      ID: "4",
      Type: "item",
      Poster:
        "https://laclassefrancaise.es/wp-content/uploads/2021/10/Duolingo-presenta-su-podcast-para-aprender-frances-1200x1200.jpeg",
    },
    {
      Title: "Collection item 5",
      ID: "5",
      Type: "item",
      Poster:
        "https://laclassefrancaise.es/wp-content/uploads/2021/10/Duolingo-presenta-su-podcast-para-aprender-frances-1200x1200.jpeg",
    },
    {
      Title: "Collection item 6",
      ID: "6",
      Type: "item",
      Poster:
        "https://laclassefrancaise.es/wp-content/uploads/2021/10/Duolingo-presenta-su-podcast-para-aprender-frances-1200x1200.jpeg",
    },
  ]);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/collection"
            element={<Collection item={items} />}
          />
          <Route exact path="/item/:id" element={<Item />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
