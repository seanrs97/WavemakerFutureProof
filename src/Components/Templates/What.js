import React from "react";
import Banner from "./Banner.js";
import MainContent from "./MainContent.js";

class What extends React.Component{
    render(){
        return (
            <div>
                <Banner
                    bannerText = "What is it?"
                    bannerDesc = "Learn more about this subject and how it can benefit you!"
                    bannerColour = {this.props.headerColour}
                />
                <MainContent 
                    what = {this.props.what}
                />
            </div>
        )
    }
}

export default What;