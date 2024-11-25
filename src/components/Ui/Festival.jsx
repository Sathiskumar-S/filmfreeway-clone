import React from 'react';
import "./Festival.css";

const Festival = ({header, content, btnName}) => {
    return (
        <div className={"features-container"}>
            <div className={"feature-box"}>
                <h3>{header}</h3>
                <p>{content}</p>
                <a href="#" target={"_blank"}>{btnName}</a>
            </div>
        </div>
)
}

export default Festival;