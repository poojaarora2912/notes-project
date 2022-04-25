import React, {useState} from "react";
import "./App.css";
import AddNotes from "./AddNotes";
import NotesList from "./NotesList";
import Header from "./Header";

function App() {
   const [notes, setNotes] = useState([]);
    const addNoteHandler = (note) => {
      console.log(note);
      setNotes([...notes, note]);
    };

    /*const removeNoteHandler = (id) =>{
      const newNoteList = notes.filter((note) => {
        return note.id !== id;
      });
        setNotes(newNoteList);
    }; */

    return (
    <div className="ui container">
      <Header/>
      
      <AddNotes addNoteHandler ={addNoteHandler}></AddNotes>
      <NotesList notes={notes}  />
</div>
  );
};

export default App;
