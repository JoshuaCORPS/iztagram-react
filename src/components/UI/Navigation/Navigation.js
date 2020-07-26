import React from "react";
import classes from "./Navigation.module.css";

const navigation = (props) => (
  <nav className={`navbar navbar-light ${classes.NavColor} fixed-top border`}>
    <div className="container">
      <a className="navbar-brand mb-0 h1" href="/">
        <img
          className={classes.Logo}
          height="30em"
          src="https://i.imgur.com/FDX09cg.png"
          alt="iztagram logo"
        />
        <span className={classes.Sidebar}></span> <span>IZ*TAGRAM</span>
      </a>
    </div>
  </nav>
);

export default navigation;
