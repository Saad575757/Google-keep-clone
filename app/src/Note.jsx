import React from "react";
import './Note.css';

const Note = (props) => {
    return (
        <>
            <div className="note">
                <h1 className="heading">{props.title}</h1>
                <br />
                <p className="content">
                    {props.content}
                </p>
                <button className="button">Delete</button>
            </div>
        </>
    );
};

export default Note;