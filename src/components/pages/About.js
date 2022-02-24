import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="hero2">
            <h1 id="title">About</h1>
          </div>

          <span id="path">
            <Link
              to="/"
              style={{ textDecoration: "underline", color: "#9d9d9d" }}
            >
              Home
            </Link>
            {"\u00A0"}/{"\u00A0"}About
          </span>
        </div>
        <div className="abouttxt">
          <span id="h1">Heading</span>
          <div className="insidetxt">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium
              <br /> doloremque laudantium, totam rem aperiam, eaque ipsa quae
              ab illo inventore
              <br /> veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim
              <br /> ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit, sed quia
              <br /> consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt.
              <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              amet, <br />
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt
              <br /> ut labore et dolore magnam aliquam quaerat voluptatem. Ut
              enim ad minima
              <br />
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi
              <br /> ut aliquid ex ea commodi consequatur? Quis autem vel eum
              iure reprehenderit
              <br /> qui in ea voluptate velit esse quam nihil molestiae
              consequatur, vel illum qui
              <br /> dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
