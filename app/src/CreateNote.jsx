import React, { useState } from "react";
import './CreateNote.css';

const CreateNote = (props) => {
    const [note, setnote] = useState({ //note is current data and setnote updated data.
        title: '',// title and content is an object, title is an imput field
        content: '',//and content is textarea field, where we have to write data from
                     //and pass data to title and content and update previous value.
                     //and whatevere in usestate property, we can call that initial data.
                     //whatever user writes on input field, inputevent helps to fire data 
                    //on the current note.
                    //whaever usestate has value setnote can access.  
    });
    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;
        const {name, value} = event.target; // input event targets two things value and name.


        setnote((prevData) => {
            return{
                ...prevData,
                [name]: value,
            };

        });
        console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
        setnote({ //note is current data and setnote updated data.
            title: '',// title and content is an object, title is an imput field
            content: '',//and content is textarea field, where we have to write data from
                         //and pass data to title and content and update previous value.
                         //and whatevere in usestate property, we can call that initial data.
                         //whatever user writes on input field, inputevent helps to fire data 
                        //on the current note.
                        //whaever usestate has value setnote can access.  
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
