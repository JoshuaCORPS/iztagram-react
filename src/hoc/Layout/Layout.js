import React, { Component } from "react";
import Aux from "../Auxilliary/Auxilliary";
import Navigation from "../../components/UI/Navigation/Navigation";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <main className="container">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
