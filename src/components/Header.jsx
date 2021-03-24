import React, { useState } from "react";
import ContentData from "../data/content.json";

function Header(props) {
  const [note, setNote] = useState({
    headline: "ContentData[0].blocks[0].headline",
    subhead: "ContentData[0].blocks[0].subhead"
  });

  // function submitNote() {
  //   //props.addNote(props.id);
  //   props.onAdd(note);
  //   setNote({
  //     headline: "",
  //     subhead: ""
  //   });
  // }

  function handleClick() {
    props.onDelete();
  }

  return (
    <div className="header">
      <div className="row logo">
        <div className="col-12 col-md-8">
          <img
            src={
              "https://f.v1.n0.cdn.getcloudapp.com/items/0C3l1E2v1k3b1a2C0C26/abc_logo.svg"
            }
            className="logo"
          />
        </div>
        <div className="col-6 col-md-4">
          <button className="contact-btn">Contact us</button>
        </div>
      </div>

      <div className="row menu">
        <ul className="menu">
          {ContentData.map((contentDetails, index) => {
            return (
              <div className="row menu">
                <ul className="menu">
                  {" "}
                  <li id={index} key={index}>
                    {" "}
                    <a href="#" onClick={handleClick}>
                      {contentDetails.title}{" "}
                    </a>{" "}
                  </li>{" "}
                </ul>
              </div>
            );
          })}
          {/* <li>
            {" "}
            <a href={"#"}>industries</a>
          </li>
          <li>
            {" "}
            <a href={"#"}>services </a>
          </li>
          <li>
            {" "}
            <a href={"#"}>contact us </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
