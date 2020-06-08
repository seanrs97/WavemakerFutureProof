import React from "react";
import Header from "./Templates/Header.js";
import MainContent from "./Templates/MainContent.js";
import Resources from "./Templates/Resources.js";
import Banner from "./Templates/Banner.js";
import Quiz from "./Quiz.js";

import sal from "sal.js";
import '../../node_modules/sal.js/dist/sal.css';

class Template extends React.Component {
    componentDidUpdate(){
        sal({
            once: false
        });
    }
    render(){
        console.log(this.props.quiz)
        return (
            <div>
                <Header 
                    image = {this.props.image}
                    imageTab = {this.props.imageTab}
                    imageMob = {this.props.imageMob}
                    name = {this.props.name}
                    headerColour = {this.props.headerColour}
                    description = {this.props.description}
                />
                <MainContent
                    content = {this.props.content}
                />
                <Banner
                    bannerOne = {this.props.bannerOne}
                />
                <MainContent content2 = {this.props.content2}/>
                <Banner bannerTwo = {this.props.bannerTwo}/>
                <MainContent content3 = {this.props.content3}/>
                <Quiz style = {{overflowY: "scroll"}} quiz = {this.props.quiz} quizColour = {this.props.headerColour} />
                <Resources resources = {this.props.resources}/>

            </div>
        )
    }
}

export default Template;