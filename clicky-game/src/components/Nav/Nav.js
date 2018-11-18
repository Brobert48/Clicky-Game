import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar">
    <ul className="list-inline">
      <li className="brand list-inline-item"><a href="/">Clicky Game</a></li>
      <li className="list-inline-item">{props.msg}</li>
      <li className="list-inline-item">Score: {props.score} | Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
