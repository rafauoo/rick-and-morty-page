import React from "react";
import './Body.css';
import image from '../images/image.png'

function Body() {
        return (
            <body id="body">
                <div id="cover">
                    <h1 id="h1-text">Episodes of the <span id="h1-4th">4th</span><br/>season 
                    of the series<br/><span id="h1-rickandmorty">Rick and Morty</span></h1>
                    <img src={image} alt="Rick And Morty" id="image"></img>
                </div>
                <div id="list">
                </div>
            </body>
        )
}

export default Body;