import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => (
  <nav className={`navbar navbar-light ${classes.NavColor} fixed-top border`}>
    <div className="container">
      <Link className="navbar-brand mb-0 h1" to="/">
        <img
          className={classes.Logo}
          height="30em"
          src="https://i.imgur.com/FDX09cg.png"
          alt="iztagram logo"
        />
        <span className={classes.Sidebar}></span> <span>IZ*TAGRAM</span>
      </Link>
    </div>
  </nav>
);

export default Navigation;
