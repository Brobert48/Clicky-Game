import React from "react";
import "./Thumbnail.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
const Thumbnail = props => (
  <div
    className="click-item"
    role="img"
    aria-label="click item"
    style={{
      backgroundImage: `url(${props.src})`
    }}
    key={props.id}
    id={props.id}
    onClick={props.onClick}
  />
);

export default Thumbnail;
