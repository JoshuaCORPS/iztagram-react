import React from "react";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import Dropdown from "../UI/Dropdown/Dropdown";
import ContentBody from "./ContentBody/ContentBody";
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

            <ContentBody data={data} classes={classes} />
          </div>
        </div>
      </div>
    );
  });

  return <Aux>{cards}</Aux>;
};

export default contents;
