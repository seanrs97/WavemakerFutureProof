import React  from "react";
import styled from "styled-components";

class HeaderComp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            animation: " ",
            animate: false
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.name !== this.props.name){
            clearTimeout(this.timeout);
            if(this.state.animation !== "slideIn 2.5s linear"){
                this.setState({
                    animation: "slideIn 2.5s linear"
                });
                this.timeout = setTimeout(() => {
                    this.setState({ animation: " "})
                }, 2500);
            } else {
                this.setState({
                    animation: " "
                })
            }
        }
    }
    render(){
        console.log("YEEEE", this.props);
        return (
            <div>
                {Object.values(this.props).map((header) =>
                    <div>
                        <HeaderImage headerImageDesk = {header.image}>
                            <ImageTextContainer style = {{animation: this.state.animation}}>
                                <H1> {header.text} </H1>
                                <Stripe stripeColour = "white"/>
                                <p> {header.desc} </p>
                            </ImageTextContainer>
                        </HeaderImage>
                    </div>
                )}
            </div>
            // <HeaderImage
            //     headerImageDesk = {this.props.image}
            //     headerImageTab = {this.props.imageTab}
            //     headerImageMob = {this.props.imageMob}
            // >
            //     <div></div>
            //     <ImageTextContainer style = {{animation: this.state.animation}}>
            //         <H1> {this.props.text} </H1>
            //         <Stripe stripeColour = {this.props.headerColour}/>
            //         <p> {this.props.desc} </p>
            //     </ImageTextContainer>
            // </HeaderImage>
        )
    }
}

const HeaderImage = styled.div`
    overflow: hidden;
    color: white;
    position: relative;
    height: 80vh;
    @media only screen and (min-width: 2000px){
        height: 90vh;
    }
    background: url(${props => props.headerImageDesk});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    @media only screen and (max-width: 760px){
        // background: url(${props => props.headerImageTab});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
    @media only screen and (max-width: 500px){
        // background: url(${props => props.headerImageMob});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
`
const ImageTextContainer = styled.div`
    @keyframes slideIn{
        0%{
            left: -170%;
        }
        65%{
            left: 80%;
        }
        100%{
            left: 50%;
        }
    }
    @keyframes slideInMobile{
        0%{
            left: -170%;
        }
        65%{
            left: 80%;
        }
        100%{
            left: 50%;
        }
    }
    text-shadow: 5px 5px 5px #545454;
    animation: slideIn 2s ease-in-out;
    color: white;
    width: 90%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: 0;
    
    @media only screen and (min-width: 2000px){
        width: 70%;
    }
    @media only screen and (min-width: 1700px) and (max-width: 2000px){
        width: 78%;
    }
    @media only screen and (min-width: 1280px) and (max-width: 1700px){
        width: 78%;
    }
    h1{
        font-size: 3.4em;
        text-transform: uppercase;
        line-height: 1em;
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
    @media only screen and (min-width: 1400px){
        h1{
            font-size: 6em;
        }
        p{
            font-size: 1.6em;
        }
    }
    @media only screen and (max-width: 760px){
        width: 90%;
    }
    @media only screen and (max-width: 500px){
        width: 80%;
        animation: slideInMobile 2s ease-in-out;
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
`

export default HeaderComp;