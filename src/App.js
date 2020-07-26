import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import ContentBuilder from "./containers/ContentBuilder/ContentBuilder";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={ContentBuilder} />
            <Redirect from="*" to="/" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
