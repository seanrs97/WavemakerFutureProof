import React  from "react";
import {HeaderImage, ImageTextContainer, H1, Stripe, Wave} from "./HeaderStyles"
import WaveImage from "../../../Images/SVG/quiz-wave-1.svg";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
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

export default Header;