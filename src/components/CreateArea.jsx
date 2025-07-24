import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [noteInfo, setNoteInfo] = useState({
    title: "",
    content: "",
  });

  const [expandCreateArea, setExpandCreateArea] = useState(false);


  function updateNote(event) {
    const { value, name } = event.target;

    setNoteInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    });
  }

  function expand() {
    setExpandCreateArea(true);
  }

  return (
    <div>
      <form className="create-note">
        {expandCreateArea && <input
          name="title"
          placeholder="Title"
          value={noteInfo.title}
          onChange={updateNote}
        />
        }
        <textarea
          name="content"
          onClick={expand}
          placeholder="Take a note..."
          rows={expandCreateArea? 3 : 1}
          value={noteInfo.content}
          onChange={updateNote}

        />
        <Zoom in={expandCreateArea}>
          <Fab onClick={(event) => {
            event.preventDefault();
            props.onAdd(
              noteInfo
            );
            setNoteInfo({ title: "", content: "" });
          }}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
