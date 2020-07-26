import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Aux from "../../../hoc/Auxilliary/Auxilliary";

const dropdown = (props) => {
  let download = (
    <Dropdown.Item eventKey="1" href={props.imgUrl} target="_blank">
      View Image
    </Dropdown.Item>
  );

  if (props.videoUrl)
    download = (
      <Dropdown.Item eventKey="1" href={props.videoUrl} target="_blank">
        Download Video
      </Dropdown.Item>
    );
  return (
    <Aux>
      <DropdownButton
        variant="link"
        as={ButtonGroup}
        title=""
        id="bg-nested-dropdown"
      >
        <Dropdown.Item eventKey="1" href={props.postUrl} target="_blank">
          Instagram Link
        </Dropdown.Item>
        {download}
      </DropdownButton>
    </Aux>
  );
};

export default dropdown;
