import React, { Component } from "react";
import axios from "axios";
import Contents from "../../components/Contents/Contents";
import Spinner from "../../components/UI/Spinner/Spinner";
import Pagination from "../../components/UI/Pagination/Pagination";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import classes from "./ContentBuilder.module.css";

class ContentBuilder extends Component {
  state = {
    contents: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 15,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      const contents = await axios.get("/result.json");

      this.setState({
        contents: contents.data,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: true });
    }
  }

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    window.scrollTo(0, 0);
  };

  render() {
    const { currentPage, postsPerPage, contents } = this.state;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = contents.slice(indexOfFirstPost, indexOfLastPost);

    let contentBody = <Contents datas={currentPost} />;
    if (this.state.loading) contentBody = <Spinner />;

    return (
      <Aux>
        <div className={`row ${classes.MarginContent}`}>{contentBody}</div>
        <Pagination
          postPerPage={this.state.postsPerPage}
          totalPosts={this.state.contents.length}
          paginate={this.paginate}
          currentPage={this.state.currentPage}
        />
      </Aux>
    );
  }
}

export default ContentBuilder;
