import React from "react";
import NotesCard from "./NotesCard";

const NotesList=(props) =>{
    console.log(props);
    
   /*const deleteNoteHandler = (id) => {
        props.getNoteId(id);
    }; */
    const renderNoteList = props.notes.map((note)=>{

        return(
            <NotesCard note={note} ></NotesCard>      


         

        );
    });
    return <div className="ui celled list">
        {renderNoteList}
        </div>
    

};

export default NotesList;