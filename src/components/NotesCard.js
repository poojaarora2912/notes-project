import React from "react";

const NotesCard = (props) => {
    const {id, noteheading, notedetails} = props.note;
    return (
        <div className="item">
            <div className="=content">
                <div className="header">{noteheading}</div>
                <div>{notedetails}</div>

            </div><br/>
             
        </div>
    )
}

export default NotesCard;