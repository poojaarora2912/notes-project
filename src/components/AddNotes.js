import React from "react";

class AddNotes extends React.Component{
    state = {
        noteheading:"",
        notedetails:"",
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.noteheading=== "" || this.state.notedetails===""){
            alert("All the field are mandatory");
            return;
        }
        //this.props.addContactHandler(this.state);
        this.props.addNoteHandler(this.state);
        this.setState({noteheading:"", notedetails: ""});
       // console.log(this.state);
        
        
    };
    render(){
        return(
            
            <div className="ui main">
                <h2>Add Notes</h2>
                <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Note Heading</label>
                    
                    <input type="text" name="noteheading" placeholder="Note Heading" value={this.state.noteheading} 
                    onChange={(e) => this.setState({noteheading:e.target.value})}/>
                </div>
                <div className="field">
                    <label>Note Details</label>
                    <input type="text" name="notedetails" placeholder="Note Details"
                    value={this.state.notedetails} 
                    onChange={(e) => this.setState({notedetails:e.target.value})}/>
                </div>
                <button className="ui button blue">Add Note</button>
            </form>
            </div>

        );
    }
}

export default AddNotes;