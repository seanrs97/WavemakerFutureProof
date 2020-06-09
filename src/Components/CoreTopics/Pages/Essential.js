import React from "react";
import Template from "../Template";
import HeaderImage from "../../../Images/headerImages/Banner6.png";

const Essential = () => {
    const buttons = 
        [
            {
                "id": "Essential-introduction",
                "image": "/images/buttonImages/EssentialIntro.svg",
                "text": "An Introduction to what Essential Digitial Skills are and what they can be used for!"
            },
            {
                "id": "online-tools",
                "image": "/images/buttonImages/EssentialTools.svg",
                "text": "Learn about essential online tools that you need to know about! "
            },
            {
                "id": "e-safety",
                "image": "/images/buttonImages/EssentialSafety.svg",
                "text": "Learn about safety online. As well as how to use your phone and browse the internet safely."
            },
            {
                "id": "mobile-apps-for-creatives",
                "image": "/images/buttonImages/EssentialCreatives.svg",
                "text": "Check out some of the best creative mobile apps currently available!"
            },
            {
                "id": "online-apps-for-productivity",
                "image": "/images/buttonImages/EssentialProductivity.svg",
                "text": "Check out some great online apps to help with you productivity"
            }
        ]
    return (
        <div>
            <Template
                name = "Essential Digital Skills"
                description = "Welcome to your introduction to Essential Digital Skills"
                image = {HeaderImage}
                imageTab = {HeaderImage}
                imageMob = {HeaderImage}

                buttons = {buttons}

            />
        </div>
    );
}

export default Essential;