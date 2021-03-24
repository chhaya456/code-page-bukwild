import React, { useState } from "react";
import ContentData from "../data/content.json";

function Middle(props) {
  const [note, setNote] = useState({
    headline: "ContentData[0].blocks[0].headline",
    subhead: "ContentData[0].blocks[0].subhead"
  });

  return (
    <div className="middle">
      <div className="container">
        <div className="row">
          <marquee
            behavior="slide"
            direction="up"
            className="col-xs-6 col-sm-6 col-md-6 headline"
            value={note.headline}
          >
            {props.headline}
          </marquee>

          <marquee
            behavior="slide"
            direction="up"
            className="col-xs-6 col-sm-6 col-md-6 subhead"
            value={note.subhead}
          >
            {props.subhead}
          </marquee>
        </div>
      </div>
    </div>
  );
}

export default Middle;
