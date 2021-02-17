import React from 'react'
import "./style.css"


const Home = () => {
    return(
        <div className ='home'>
            <div className="title">
            <h1>New Star Wars Site</h1>
            </div>
            <div className = "image">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png' alt="альтернативный текст"></img>
            </div>
        </div>
    )
}

export default Home;