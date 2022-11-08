import React from "react";
import logo from './Images/logo.png';
import './Header.css'


const Header = () =>{
  return(
    <>
    <div className="header">
    <img src={logo} alt="logo" className="img" />
    <h3 className="name">Keep</h3>
    </div>
    </>
  )

}
 
export default Header;