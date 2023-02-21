import React from "react";
import './Content.css';
import image from '../images/image.png'
import EpisodesList from "./EpisodesList";

function Content() {
        return (
            <div id="content">
                <h1 id="h1-text">Episodes of the <span id="h1-4th">4th</span><br/>season 
                of the series<br/><span id="h1-rickandmorty">Rick and Morty</span></h1>
                <img src={image} alt="Rick And Morty" id="image"></img>
                <EpisodesList />
            </div>
        )
}

export default Content;