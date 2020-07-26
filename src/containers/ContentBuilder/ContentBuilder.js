import React, { Component } from "react";
import axios from "axios";
import Contents from "../../components/Contents/Contents";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./ContentBuilder.module.css";

class ContentBuilder extends Component {
  state = {
    contents: [],
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const contents = await axios.get("/result.json");

      this.setState({ contents: contents.data.slice(0, 5), loading: false });
      console.log(contents);
    } catch (error) {
      this.setState({ loading: true });
    }
  }

  render() {
    let contentBody = <Contents datas={this.state.contents} />;
    if (this.state.loading) contentBody = <Spinner />;

    return <div className={`row ${classes.MarginContent}`}>{contentBody}</div>;
  }
}

export default ContentBuilder;
