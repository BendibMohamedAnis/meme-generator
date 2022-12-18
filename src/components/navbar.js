import React from "react"

export default function Navbar(){
    return(
        <div className="navbar">
            <span><img src={require("../assets/logo.png")} alt="logo" id="logo"/></span>
            <span id="title">Meme Generator</span>
            <span id="description">React Project</span>
        </div>
    )
}