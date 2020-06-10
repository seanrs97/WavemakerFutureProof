import React from "react";
import Header from "./Templates/Header.js";
import MainContent from "./Templates/MainContent.js";
import Resources from "./Templates/Resources.js";
import Banner from "./Templates/Banner.js";
import Quiz from "./Quiz.js";

import sal from "sal.js";
import '../../node_modules/sal.js/dist/sal.css';
import styled from "styled-components";

class Template extends React.Component {
    componentDidUpdate(){
        sal({
            once: false
        });
    }
    render(){
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
                    what = {this.props.what}
                />
                <Banner
                    bannerOne = {this.props.bannerOne}
                />
                <MainContent why = {this.props.why}/>
                <Banner bannerTwo = {this.props.bannerTwo}/>
                <MainContent how = {this.props.how}/>
                <Quiz style = {{overflowY: "scroll"}} quiz = {this.props.quiz} quizColour = {this.props.headerColour} />

                <UnlockableContent>
                    <HideContent style = {{display: this.props.display}}></HideContent>
                    <Resources resources = {this.props.resources}/>
                </UnlockableContent>
            </div>
        )
    }
}
const UnlockableContent = styled.div`
    position: relative;
`
const HideContent = styled.div`
    height: 100%;
    width: 100%;
    background: grey;
    opacity: 0.98;
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;

    display: none;
`

export default Template;