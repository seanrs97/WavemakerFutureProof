import React from "react";
import Header from "./Templates/Header.js";
import MainContent from "./Templates/MainContent.js";
import Resources from "./Templates/Resources.js";
import Banner from "./Templates/Banner.js";
import Quiz from "./Quiz.js";

import What from "./Templates/What.js";
import Why from "./Templates/Why.js";
import How from "./Templates/How.js";
import Navigation from "./Templates/Navigation.js";

import sal from "sal.js";
import '../../node_modules/sal.js/dist/sal.css';
import styled from "styled-components";

import Login from "./Login";

class Template extends React.Component {
    constructor(){
        super();
        this.state = {
            showUnlockableContent: "none",
            value_key: "",
        }
    }
    componentDidUpdate(){
        sal({
            once: false
        });
    }
    handleFinish = () => {
        console.log("quiz finished");
    }
    proceedToLoginPage = () => {

    }
    unlockContent = () => {

    }

    parentFunction = (data_from_child) => {
        this.setState({
            value_key: data_from_child
        })
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

                <What {...this.props} />
                <Why {...this.props} />
                <How {...this.props} />

                <DisplayContent style = {{background: this.props.headerColour}}>
                    <div>
                        <h1> Want to view more content? </h1>
                        <p> I'm afraid you'll need to login to view anymore content. Please click on the button below to login or sign up!</p>

                        <button onClick = {this.proceedToLoginPage}><a id = "quiz" href = "login.html?action=" >Login</a></button>
                    </div>
                </DisplayContent>

                <UnlockableContent style = {{display: this.state.showUnlockableContent}}>
                    <Quiz onFinished = {this.handleFinish} style = {{overflowY: "scroll"}} quiz = {this.props.quiz} quizColour = {this.props.headerColour} />
                    <HideContent style = {{display: this.props.display}}></HideContent>
                    <Resources resources = {this.props.resources}/>
                </UnlockableContent>

                <Navigation {...this.props}/>
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
const DisplayContent = styled.div`
    margin-bottom: 40px;
    padding: 40px 0;
    div{
        width: 90%;
        @media only screen and (min-width: 1280px) and (max-width: 2000px){
            width: 78%;
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
        }
        margin: 0 auto;
        h1{
            color: white;
            line-height: 1.2em;
            text-align: center;
            padding-bottom: 60px;
        }
        p{
            color: white;
            text-align: center;
            padding-bottom: 40px
        }
        button{
            margin: 0 auto;
            display: block;
            border: none;
            background: white;
            font-size: 2.6em;
            border-radius: 10px;
            padding: 26px 100px;
            cursor: pointer;
            font-family: Dosis;
            font-weight: 900;
            letter-spacing: 0.05em;
            color: #595858;

            a{
                text-decoration: none;
            }
        }
    }
`

export default Template;