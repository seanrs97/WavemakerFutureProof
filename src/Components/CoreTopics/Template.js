import React from "react";

import Header from "./Header";
import Buttons from "./Buttons";
import NextSteps from "./NextSteps";

class Template extends React.Component{
    render(){
        return (
            <div>
                <Header 
                    image = {this.props.image}
                    imageTab = {this.props.imageTab}
                    imageMob = {this.props.imageMob}
                    headerColour = {this.props.headerColour}
                    name = {this.props.name}
                    description = {this.props.description}
                />
                <Buttons buttons = {this.props.buttons}/>
                <NextSteps 
                    image = {this.props.image}
                    navigation = {this.props.navigation}
                />
            </div>
        )
    }
}

export default Template;