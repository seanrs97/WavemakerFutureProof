import React from "react";
import Banner from "./Banner.js";
import MainContent from "./MainContent.js";

class Why extends React.Component{
    render(){
        return (
            <div>
                <Banner
                    bannerText = "Why do we use it?"
                    bannerDesc = "Learn more about why this subject is as popular as it is today!"
                    bannerColour = {this.props.headerColour}
                />
                <MainContent 
                    why = {this.props.why}
                />
            </div>
        )
    }
}

export default Why;