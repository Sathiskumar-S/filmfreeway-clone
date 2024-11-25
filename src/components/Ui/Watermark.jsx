import React from 'react';
import images from '../../assets/img';
import "./Watermark.css";

const Watermark = () => {
  return (
    <div className={"container watermark-container"} id='fest'>
      <img src={images.brands_watermark} height={"100px"} width={"100%"}/>
        <div className={"DecorativeText-component watermark"}>
            <p className={"tagline"}>Home of the Industry's Top Festivals and Filmmakers</p>
            <span className={"Border"}></span>
        </div>

    </div>
  )
}

export default Watermark