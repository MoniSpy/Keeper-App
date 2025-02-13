import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props){
   
    const [isExpanded, setIsExpanded]=useState(false);

    const [note, setNote]=useState({
        title :"",
        content :""
    });
   

    function handleOnChange(event){
        console.log("set clicked=true");
        isClicked=true;
        const { name, value }= event.target;
        setNote ( prevNote => {
            return {
                ...prevNote,
                [name]:value
            };
        });
    }

    function submitNote(event){   
        props.onAdd(note);
        //Clear form after submited
        setNote({
            title :"",
            content :""
        });
        //Prevent form's default refreshing when button is pressed 
        event.preventDefault();
    }

    function expand(){
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input 
                        name="title" 
                        onChange={handleOnChange} 
                        placeholder="Title"  
                        value={note.title}
                    />
                    )}
                <textarea 
                    name="content" 
                    onClick={expand}
                    onChange={handleOnChange} 
                    placeholder="Take a note..." 
                    rows={isExpanded ? 3 : 1 } 
                    value={note.content}
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
                
            </form>
            
        </div>
    );
}

export default CreateArea;