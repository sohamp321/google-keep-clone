import React, { useState } from "react";

function CreateArea(props) {
  const [noteInfo, setNoteInfo] = useState({
    title: "",
    content: "",
  });

  function updateNote(event) {
    const { value, name } = event.target;

    setNoteInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={noteInfo.title}
          onChange={updateNote}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteInfo.content}
          onChange={updateNote}
        />
        <button onClick={(event) => {
          event.preventDefault();
          props.onAdd(
            noteInfo
          );
          setNoteInfo({ title: "", content: "" });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
