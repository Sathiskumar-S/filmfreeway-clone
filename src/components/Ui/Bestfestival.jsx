import React from 'react';
import "./Bestfestival.css";
import ImageList from "./ImageList.jsx";
import images from "../../assets/img/index.js";
import Button from "./Button.jsx";

const BestFestivals = () => {
  let bestFestivalsData = {
    header: "Enter the World's Best Festivals",
    content: "Over 12,000 of the world's best film festivals and screenplay contests, including 231 Academy Award / BAFTA Award accredited festivals, use FilmFreeway to reach over two million filmmakers worldwide.",
  };
  return (
    <div className="best-festival-container container">
      <h3 className={"best-festival-title"}>{bestFestivalsData.header}</h3>
      <p className={"best-festival-data"}>{bestFestivalsData.content}</p>
      <ImageList image1={images.tribeca} image2={images.miff} image3={images.siff} image4={images.rff} image5={images.ciff} image6={images.sff}/>
      <ImageList image1={images.riiff} image2={images.liff} image3={images.hsff} image4={images.aifvf} image5={images.hiff} image6={images.studentacademy}/>
      <ImageList image1={images.docedge} image2={images.nbff} image3={images.bhff} image4={images.mtom} image5={images.kcff} image6={images.filmquest}/>
      <ImageList image1={images.dsff} image2={images.mflf} image3={images.nhff} image4={images.flsc} image5={images.killershorts} image6={images.hundredfilms}/>
      <Button name={"See All Festivals"} style={{margin: "0 auto"}} />
    </div>
  )
}

export default BestFestivals;