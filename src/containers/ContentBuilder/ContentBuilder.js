import React, { useState, useEffect } from "react";
import axios from "axios";
import Contents from "../../components/Contents/Contents";
import Spinner from "../../components/UI/Spinner/Spinner";
import Pagination from "../../components/UI/Pagination/Pagination";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import classes from "./ContentBuilder.module.css";

const ContentBuilder = (props) => {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = contents.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const contents = await axios.get("/result.json");
        setContents(contents.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    })();
  }, []);

  let contentBody = <Contents datas={currentPost} />;
  if (loading) contentBody = <Spinner />;

  return (
    <Aux>
      <div className={`row ${classes.MarginContent}`}>{contentBody}</div>
      <Pagination
        postPerPage={postsPerPage}
        totalPosts={contents.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Aux>
  );
};

export default ContentBuilder;
