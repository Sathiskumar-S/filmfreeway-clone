import React from 'react';
import "./TopFestival.css";
import Festival from "./Festival.jsx";

const TopFestival = () => {

  let topFestData = [
    {
      header: "Discover Amazing Festivals",
      content: "Browse thousands of the world's top film festivals and contests.",
      btnName: "Learn More >"
    },
    {
      header: "The Smart and Easy Way to Submit",
      content: "Add your project then click to submit. Simple and fast.",
      btnName: "Start Submitting >"
    },
    {
      header: "Game Changing for Festivals and Contests",
      content: "Receive entries, sell tickets, promote and manage your event.",
      btnName: "Why FilmFreeway >"
    }
  ];

  return (
      <div className='container top-festival'>
        <div className="row">
            <div className="col-md-4 fest-content">
                <Festival header={topFestData[0].header} content={topFestData[0].content} btnName={topFestData[0].btnName} />
            </div>
            <div className="col-md-4 fest-content">
                <Festival header={topFestData[1].header} content={topFestData[1].content} btnName={topFestData[1].btnName} />  
            </div>
            <div className="col-md-4 fest-content">
                <Festival header={topFestData[2].header} content={topFestData[2].content} btnName={topFestData[2].btnName} />
            </div>
        </div>
      </div>
  )
}

export default TopFestival;