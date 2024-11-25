import React from 'react'
import "./Reviews.css"
import images from "../../assets/img/index"
import Button  from './Button';

const Reviews = () => {
    let cardData = [
        {
            data: "FilmFreeway has established itself as the industry standard in festival submissions.",
            artistName: "Adam Montgomery, Senior Manager Programming",
            festName: "Sundance Film Festival",
        },
        {
            data: "FilmFreeway is where filmmakers go to discover and enter film festivals.",
            artistName: "Cameron Bailey, Artistic Director & Co-Head",
            festName: "Toronto International Film Festival",
        },
    ];

   
    return (
        <div className='reviews'>
            <img src={images.reviews_background} alt="images" className={"reviews-bg"} />
            <h3 className={"review-title"}>Happy Filmmakers,<br /> Happy Festivals</h3>
            <div className="row card-container">
                <div className="col-md-6">
                    <div className="card card1">
                        <div className="card-body">
                            <h5 className="card-title data">{cardData[0].data}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary artist-name">{cardData[0].artistName}</h6>
                            <p className="card-text fest-name">{cardData[0].festName}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card card2">
                        <div className="card-body">
                            <h5 className="card-title data">{cardData[1].data}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary artist-name">{cardData[1].artistName}</h6>
                            <p className="card-text fest-name">{cardData[1].festName}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-Style">
                <Button name={"Read Reviews"} />
            </div>
        </div>
    )
}

export default Reviews