import React from "react";
import Template from "../Template";
import HeaderImage from "../../../Images/headerImages/Banner4.png";

const Coding = () => {
    const buttons = 
        [
            {
                "id": "digital-introduction",
                "image": "/images/buttonImages/DigitalIntro.svg",
                "text": "An Introduction to what digital design is and what it's used for!"
            },
            {
                "id": "digital-video",
                "image": "/images/buttonImages/DigitalVideo.svg",
                "text": "How does video fit into this digital world of ours? find out here"
            },
            {
                "id": "digital-music",
                "image": "/images/buttonImages/DigitalMusic.svg",
                "text": "Learn how the digital revolution has shaped the way we listen to music!"
            },
            {
                "id": "digital-animation",
                "image": "/images/buttonImages/DigitalAnimation.svg",
                "text": "How is animation used in digital design? Find out here!"
            }
        ]
    return (
        <div>
            <Template
                name = "Digital in Entertainment"
                description = "Welcome to your introduction to Digital Entertainment"
                image = {HeaderImage}
                imageTab = {HeaderImage}
                imageMob = {HeaderImage}

                buttons = {buttons}

            />
        </div>
    );
}

export default Coding;