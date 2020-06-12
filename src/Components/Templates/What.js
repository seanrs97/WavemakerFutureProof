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
                <MainContent what = {this.props.what}/>
                {/* {!!this.props.what && this.props.what.map((cont) =>
                    <div className = "contentContainer contentContainerComplex" key = {cont.id}>
                        <p> HELLO WORLD </p>
                        <img 
                            src = {cont.image} alt = {cont.id}
                            data-sal = "zoom-in"
                            data-sal-easing = "ease-out-back"
                            data-sal-duration = "1300"
                            data-sal-delay = "200"
                        />
                        <p className = "content-text">{cont.text}</p>
                    </div>
                    )} */}
            </div>
        )
    }
}

export default What;