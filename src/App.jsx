import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {
        notes.map((note, index) => {
          return <Note key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote} />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
