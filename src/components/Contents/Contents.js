import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import Dropdown from "../UI/Dropdown/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import classes from "./Contents.module.css";
import VideoPlayer from "react-video-js-player";

const contents = (props) => {
  const cards = props.datas.map((data, i) => {
    let output = <img className="img-fluid" src={data.imgUrl} alt="izone" />;
    if (data.videoUrl)
      output = (
        <div>
          <VideoPlayer
            playsInline
            poster={data.imgUrl}
            src={data.videoUrl}
            width="500"
          />
        </div>
      );
    // key={data.postId}
    return (
      <div className="col-md-6 col-sm-12" key={i}>
        <div className={`img-thumbnail ${classes.CardMargin}`}>
          {output}
          <div className="caption-full">
            <ButtonGroup className="float-right">
              <Dropdown
                postUrl={data.postUrl}
                imgUrl={data.imgUrl}
                videoUrl={data.videoUrl}
              />
            </ButtonGroup>
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
          </div>
        </div>
      </div>
    );
  });

  return <Aux>{cards}</Aux>;
};

export default contents;
