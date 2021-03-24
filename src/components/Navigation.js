import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="Navigation">
      <Link className="HomeLink" to="/">
        Home
      </Link>
      <Link className="AboutLink" to="/about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
