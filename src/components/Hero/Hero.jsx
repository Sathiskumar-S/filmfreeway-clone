import React from 'react'
import "./Hero.css"
import images from "../../assets/img/index";
import Navbar from "./Navbar/navbar"
import Button from "../Ui/Button"

const Hero = () => {
  let heroData = {header: "Easy Submitting", content: "The world's #1 way to enter film festivals", content1:"and screenplay contests"};
  return (
    <div id='hero'>
      <img src={images.hero_background} alt="space man" className="bg-image"/>
      <Navbar />
      <div className='row container hero'>
        <div className='col-md-6 hero-text'>
          <h1>{heroData.header}</h1>
          <p>{heroData.content} <br/> {heroData.content1}</p>
          <Button name={"Browse Festivals"}/>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  )
}

export default Hero