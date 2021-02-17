import React, { useState } from 'react'

import './style.css';

function Post(props){
    const author = props.author;
    const content = props.content;
    const date = props.date;
    console.log(date)

    const [state, changeState] = useState(false);
    
    return(
        <div className = "post">
            <div className = 'postBody'>
                <div className = 'userPhoto'>
                    <img src={author.photo} alt=" " />
                </div>
                <div className = "block">
                    <div className = 'info'>
                        <div className = "name">
                            {author.firstName} {author.lastName}
                        </div>
                    <div className= "date">
                    {date.getUTCDay()} {date.getUTCMonth() + 1} {date.getUTCFullYear()}
                    </div>
                </div>
        
                <div className ="message">
                {content.message}
                </div>
            
            
            <div className="postPhoto">
            
            <img src={content.image} alt=" " />
            </div>
                <button onClick={() => changeState(!state)}>
                    like
                </button>
                <span>
                    {state === true ? " you liked this photo" : " "}
                </span>
            </div>
            </div>
            
            
        </div>

    )
}

export default Post;