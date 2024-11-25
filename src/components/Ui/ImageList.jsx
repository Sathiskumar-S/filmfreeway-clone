import React from 'react';
import "./ImageList.css";

const ImageList = ({ image1, image2, image3, image4, image5, image6 }) => {
    const images = [image1, image2, image3, image4, image5, image6];

    return (
        <div className="image-list">
            <div className="row">
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className="col-lg-2 col-md-4 col-sm-6 col-4 mb-3"
                    >
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="img-fluid image-item"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageList;
