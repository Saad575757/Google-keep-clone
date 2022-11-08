import React from "react";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <>
        <div className="footer">
        
        <footer>
            <p> copyright © {year}</p>
        </footer>
        </div>
        </>
        
    );

};
export default Footer;