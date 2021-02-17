import React from 'react';
import './style.css'

const Photos = (props) => {
    return (
        <div className = "PhotoBlock">
            {
            props.photos.map(photo =>{
                return (
                    <div className = "gallery-photo">
                        <img  src = {photo}></img>
                    </div>
                )
           
            })
        }
        </div>
    )
}

export default Photos;