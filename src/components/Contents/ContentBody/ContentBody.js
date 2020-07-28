import React from "react";
import Aux from "../../../hoc/Auxilliary/Auxilliary";

const contentBody = ({ data, classes }) => {
  return (
    <Aux>
      <a href={data.profileUrl} target="_blank" rel="noopener noreferrer">
        {data.username}
      </a>
      <div>
        <i className={`heart icon ${classes.HeartColor}`}></i>
        {data.likeCount}
        <span className={classes.CommentSet}>
          <i className="comment outline icon"></i>
          {data.commentCount}
        </span>
      </div>
      <p>{data.description}</p>
    </Aux>
  );
};

export default contentBody;
