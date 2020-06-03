import React  from "react";
import styled from "styled-components";

import WaveImage from "../../Images/SVG/quiz-wave-1.svg";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidUpdate(prevProps, prevState){
    }
    render(){
        return (
            <HeaderImage headerColour = {this.props.headerColour}>
                <div></div>
                <ImageTextContainer>
                    <H1> {this.props.name} </H1>
                    <Stripe stripeColour = "white"/>
                    <p> {this.props.description} </p>
                </ImageTextContainer>
                <Wave src = {WaveImage} alt = "wave"/>
            </HeaderImage>
        )
    }
}

const HeaderImage = styled.div`
    overflow: hidden;
    color: white;
    position: relative;
    min-height: 70vh;
    max-height: 90vh;
    background: ${props => props.headerColour};
    // background: url(${props => props.headerImageDesk});
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-attachment: fixed;
    @media only screen and (max-width: 760px){
        // background: url(${props => props.headerImageTab});
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        // background-size: cover;
        background: ${props => props.headerColour};
    }
    @media only screen and (max-width: 500px){
        // background: url(${props => props.headerImageMob});
        // background-repeat: no-repeat;
        // background-attachment: fixed;
        // background-size: cover;
        background: ${props => props.headerColour};
    }
`
const ImageTextContainer = styled.div`
    @keyframes slideIn{
        0%{
            margin-left: -1200px;
        }
        80%{
            margin-left: 20px;
        }
        100%{
            margin-left: 0;
        }
    }
    // text-shadow: 5px 5px 5px #545454;
    color: white;
    width: 50%;
    position: absolute;
    left: 6.5%;
    bottom: 3%;
    animation: slideIn 2s linear;
    -webkit-animation: slideIn 2s linear;
    h1{
        font-size: 3.4em;
        text-transform: uppercase;
        line-height: 1.3em;
        margin-left: -1px;
    }
    p {
        color: white;
        font-weight: 400;
        line-height: 1.3em;
    }
    @media only screen and (min-width: 2500px){
        h1{
            font-size: 9em !important;
        }
        p{
            font-size: 3em !important;
        }
    }
    @media only screen and (min-width: 2000px){
        left: 22%;
        h1{
            font-size: 8em;
        }
        p{
            font-size: 2em;
        }
    }
    @media only screen and (min-width: 1350px) and (max-width: 2000px){
        left: 14%;
        h1{
            font-size: 6em;
        }
        p{
            font-size: 1.6em;
        }
    }
    @media only screen and (max-width: 760px){
        width: 65%;
    }
    @media only screen and (max-width: 500px){
        width: 80%;
        h1{
            font-size: 2.6em;
        }
        p{
            font-size: 1.05em;
        }
    }
`
const H1 = styled.h1`
    font-size: 4em;
    color: white;
`
const Stripe = styled.div`
    width: 115%;
    height: 6px;
    margin: 10px 0;
    margin-left: -15%;
    background: ${props => props.stripeColour};
    @media only screen and (min-width: 1350px) and (max-width: 2000px){
        margin-left: -28%;
        width: 128%;
        height: 8px;
    }
    @media only screen and (min-width: 2000px){
        margin-left: -45%;
        width: 145%;
        height: 10px;
    }
`
const Wave = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    @media only screen and (max-width: 900px){
        height: 240px;
        right: -100px;
        top: 30px;
        transform: rotate(60deg);
    }
    @media only screen and (min-width: 900px) and (max-width: 1600px){
        height: 340px;
        right: -140px;
        top: 60px;
        transform: rotate(-120deg);
    }
    @media only screen and (min-width: 1600px){
        transform: rotate(60deg);
        position: absolute;
        top: -100px;
        right: -350px;
        height: 800px;
    }
`
export default Header;