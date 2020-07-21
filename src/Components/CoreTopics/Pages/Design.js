import React from "react";
import Template from "../Template";
import HeaderImage from "../../../Images/headerImages/Banner7.png";

const Coding = () => {
    const buttons = 
        [
            {
                "id": "design-introduction",
                "image": "/images/buttonImages/DesignIntro.svg",
                "text": "An Introduction to what digital design is and what it's used for!"
            },
            {
                "id": "Entertainment",
                "image": "/images/buttonImages/DesignEntertainment.svg",
                "text": "Design is all around us. Especially in entertainment, learn how some of the biggest industries in the world utilise 2D and 3D design."
            },
            {
                "id": "graphic-design",
                "image": "/images/buttonImages/DesignGraphic.svg",
                "text": "Learn about the ins and outs of the big world of graphic design."
            }
        ]
    return (
        <div>
            <Template
                name = "Digital Design"
                description = "Welcome to your introduction to Digital Design"
                image = {HeaderImage}
                imageTab = {HeaderImage}
                imageMob = {HeaderImage}

                buttons = {buttons}

            />
        </div>
    );
}

export default Coding;