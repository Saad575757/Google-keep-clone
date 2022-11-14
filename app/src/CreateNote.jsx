import React, { useState } from "react";
import './CreateNote.css';

const CreateNote = (props) => {
    
    const [note, setnote] = useState({ 
        title:"",
        content:"",
    });
    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const { name, value } = event.target; // input event targets two things value and name.


        setnote((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };

        });
        console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
        setnote({ 
            title:"",
            content:"",
        });
    };

    return (
        <>
            <div className="main_note">
                <form className="form">
                    <input type="text" placeholder="Title" name="title" value={note.title} onChange={InputEvent} className="text_input" autoComplete="off"></input>
                    <textarea cols="30" rows="10" placeholder="Write a note..." name="content" value={note.content} onChange={InputEvent} className="textarea"></textarea>
                    <button className="button" onClick={addEvent}>Add</button>
                </form>
            </div>
        </>
    );
};

export default CreateNote;
