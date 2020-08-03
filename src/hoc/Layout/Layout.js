import React from "react";
import Aux from "../Auxilliary/Auxilliary";
import Navigation from "../../components/UI/Navigation/Navigation";

const Layout = (props) => {
  return (
    <Aux>
      <Navigation />
      <main className="container">{props.children}</main>
    </Aux>
  );
};
export default Layout;
