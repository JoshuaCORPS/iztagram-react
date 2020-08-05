import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import ContentBuilder from "./containers/ContentBuilder/ContentBuilder";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
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
};

export default App;
