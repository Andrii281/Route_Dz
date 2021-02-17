import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './style.css';
const Header = () =>{
    return (
        <div className ="Header">
            <div className = "logo">
                <img src = "https://stickerzone.shop/wp-content/uploads/2018/10/21.png"></img>
            </div>
                <div className="menu">
                    <Link to="/"><span>Home</span></Link>
                  
                    <Link to="/posts"><span>Posts</span></Link>
                   
                    <Link to="/photos"><span>Photos</span></Link>
                   
                    <Link to="/contacts"><span>Contacts</span></Link>
                </div>   
        </div>
    )
}

export default Header