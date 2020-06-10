import React from "react";
import Banner from "../Templates/Banner.js";
import MainContent from "./Templates/MainContent.js";

class What extends React.Component{
    render(){
        return (
            <div>
                <Banner
                    bannerText = "What is it?"
                    bannerDesc = "Learn more about this subject and how it can benefit you!"
                    bannerColour = {this.props.bannerColour}
                />
                <MainContent/>
            </div>
        )
    }
}

export default What;