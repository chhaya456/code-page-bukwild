import React, { useState } from "react";
import Header from "./Header";
import Middle from "./Middle";
import ContentData from "../data/content.json";

function Main(props) {
  const [notes, setNotes] = useState([]);

  function deleteNote(id) {
    console.log("clicked");

    // setNotes((ContentData) => {
    //   return ContentData.filter((noteItem, index) => {
    //     return index === id;
    //   });
    // });
  }

  return (
    <div>
      <Header />

      {ContentData.map((noteItem, index) => {
        return (
          <Middle
            onDelete={deleteNote}
            key={index}
            id={index}
            headline={noteItem.blocks[0].headline}
            subhead={noteItem.blocks[0].subhead}
          />
        );
      })}

      {/* <Middle
        // key={index}
        // id={index}
        onDelete={deleteNote}
        headline={ContentData[0].blocks[0].headline}
        subhead={ContentData[0].blocks[0].subhead}
      /> */}
    </div>
  );
}

export default Main;
