import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <h1 className="center aligned">Todo App</h1>
      <div className="right menu">
        <Link to="/" className="item">
          All Todos
        </Link>
      </div>
    </div>
  );
};

export default Header;
