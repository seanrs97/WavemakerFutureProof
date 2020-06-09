import React from "react";
import Template from "../Template";
import HeaderImage from "../../../Images/headerImages/CodingBanner1.png";

const Coding = () => {
    const buttons = 
        [
            {
                "id": "/?page=codingIntro",
                "image": "/images/buttonImages/intro.svg",
                "text": "An Introduction to what code is, what it can be used for and why it's an important skill for the future"
            },
            {
                "id": "/?page=robotics",
                "image": "/images/buttonImages/robotics.svg",
                "text": "Dive into the world of robotics and learn the science behind what makes some of the worlds most powerful robots"
            },
            {
                "id": "/?page=ai",
                "image": "/images/buttonImages/ai.svg",
                "text": "Dive into the world of robotics and learn the science behind what makes some of the worlds most powerful robots"
            },
            {
                "id": "/?page=web",
                "image": "/images/buttonImages/web.svg",
                "text": "Learn how to build your very own website!"
            },
            {
                "id": "/?page=gameDev",
                "image": "/images/buttonImages/games.svg",
                "text": "Ever played a video game and wondered exactly what is going on behind the screen? well now you can!"
            },
            {
                "id": "/?page=appDev",
                "image": "/images/buttonImages/apps.svg",
                "text": "Facebook, Twitter, Instagram and Uber! if you've used these, then you've already got an idea of what app dev is!"
            }
        ]
    return (
        <div>
            <Template
                name = "Coding & Programming"
                description = "Welcome to your introduction to Coding & Programming"
                image = {HeaderImage}
                imageTab = {HeaderImage}
                imageMob = {HeaderImage}

                buttons = {buttons}

            />
        </div>
    );
}

export default Coding;