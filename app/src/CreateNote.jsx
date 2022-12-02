import React, { useState } from "react";
import './CreateNote.css';

const CreateNote = (props) => {

    const [note, setnote] = useState({
        title: "",
        content: "",
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

    const addEvent = (e) => {
        e.preventDefault();
        props.passNote(note);
        setnote({
            title: "",
            content: "",
        });
    };
    const [expand, setExpand] = useState(false);
    const expandIt = () => {
        setExpand(true);
    }
    const backtoNormal = () => {
        setExpand(false);
    }


    return (
        <>
            <div className="main_note" onDoubleClick={backtoNormal}>
                <form className="form" onSubmit={addEvent}>
                    {expand ? <input type="text" placeholder="Title" name="title" value={note.title} onChange={InputEvent} className="text_input" autoComplete="off"></input> : null}
                    <textarea cols="30" rows="10" placeholder="Write a note..." name="content" value={note.content} onChange={InputEvent} onClick={expandIt} className="textarea"></textarea>
                    {expand ? <button className="button" type="submit">Add</button> : null}
                </form>
            </div>
        </>
    );
};

export default CreateNote;


