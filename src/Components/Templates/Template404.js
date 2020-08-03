import React from "react";
import styled from "styled-components";

import Wave2 from "../../Images/SVG/quiz-wave-1.svg";

class Template404 extends React.Component {
    render(){
        return(
            <Template style = {{display: this.props.display404}}> 
                <div className = "message">
                    <h1> 404 PAGE </h1>
                    <p>Oops, something went wrong here</p>
                </div>
                <img className = "image2" src = {Wave2} alt = "background of wave"/>
            </Template>
        )
    }
}

const Template = styled.div`
    height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: white;
    z-index: 100;
    .message{
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        h1{
            color: #bfbfbf;
            line-height: 1.2em;
            @media only screen and (min-width: 2100px){
                font-size: 14em;
            }
            @media only screen and (min-width: 1400px) and (max-width: 2100px){
                font-size: 10em;
            }
            @media only screen and (max-width: 900px) and (min-width: 500px){
                font-size: 7em;
            }
            @media only screen and (max-width: 500px){
                font-size: 4.3em;
            }
        }
        p{
            color: #a6a6a6;
            font-size: 1.5em;
            @media only screen and (min-width: 2100px){
                font-size: 2.4em;
            }
            @media only screen and (min-width: 1400px) and (max-width: 2100px){
                font-size: 2em;
            }
            @media only screen and (max-width: 900px) and (min-width: 500px){
                font-size: 1.5em;
            }
            @media only screen and (max-width: 500px){
                font-size: 1.2em;
            }
        }
    }
    .image1{
        position: absolute;
        right: -100px;
        bottom: -10px;
        height: 300px;
        @media only screen and (max-width: 1200px) and (min-width: 600px){
            height: 220px;
        }
        @media only screen and (max-width: 600px){
            height: 120px;
        }
    }
    .image2{
        position: absolute;
        top: -20px;
        left: -100px;
        height: 500px;
        transform: rotate(170deg);
        filter: invert(102%) sepia(103%) saturate(1212%) hue-rotate(27deg) brightness(119%) contrast(19%);
        @media only screen and (max-width: 1200px) and (min-width: 600px){
            height: 400px;
        }
        @media only screen and (max-width: 600px){
            height: 300px;
        }
    }
`

export default Template404;