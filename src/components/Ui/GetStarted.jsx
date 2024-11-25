import React from 'react';
import "./GetStarted.css";
import images from "../../assets/img/index.js";
import Button from "./Button.jsx";

const GetStarted = () => {
  return (
      <div className={"get-started"}>
        <img src={images.contest_background} alt="images" className={"getStat-bg"}/>
        <h3 className={"getStat-title"}>Ready To Get Started?</h3>
        <p className={"getStat-content"}>Submitting to festivals and contests has never been easier.
          Join the world's leading film and festival community.</p>
        <div className={"getStat-btn"}>
          <Button name={"Get Started"}/>
        </div>
      </div>
  )
}

export default GetStarted