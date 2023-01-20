import React from "react";
import Hippo from "../assets/hippo-solid.svg"

export default function Navbar(props){

    return (
        <div className="navbar--container">
            <img className="navbar--hippo" src={Hippo} alt="Hippo Icon" />
            <h1 className="navbar--title">BookHippo</h1>
            <p className="navbar--mamuca">pentru mamuca</p>
            <button className="navbar--lockButton" onClick={props.lock}>Lock</button>
        </div>
    )
}