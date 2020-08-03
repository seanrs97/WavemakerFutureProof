import React from "react";

import {Container, SuccessContainer, ButtonContainer} from "./SummaryStyles.js";
import QuizImage1 from "../../Images/SVG/quiz-wave-1.svg";
import QuizImage2 from "../../Images/SVG/quiz-wave-2.svg";

import Confetti from "./Confetti.js";

// This is where the User will find their results. This is mainly just a template page.
// Data is being returned back to the Play component which populates the .props. e.g. this.props.playAgain utilises a method in Play.js to Restart the quiz

class Summary extends React.Component {
    constructor(){
        super();
        this.state = {
            showConfetti: "none"
        }
    }
    render(){
        return (
            <Container style = {{background: this.props.quizColour}}>
                <div className = "content-container">
                    <div style = {{display: this.props.showConfetti}}>
                        <Confetti/>
                    </div>
                    <h1> Summary </h1>
                    <h2> You scored {this.props.score} out of {this.props.numOfQuestions} </h2>

                    <SuccessContainer>
                        <p> You have {this.props.success} </p>
                    </SuccessContainer>
                </div>
                <img alt = "background of wave" src = {QuizImage1} className = "top-quiz-wave" />
                <img alt = "background of wave" src = {QuizImage2} className = "bottom-quiz-wave"/>
                <ButtonContainer>
                    <button onClick = {this.props.playAgain}> Play again </button>
                    <button onClick = {this.props.homeReturn}> Move on! </button>
                </ButtonContainer>
            </Container> 
        )
    }
}
export default Summary;