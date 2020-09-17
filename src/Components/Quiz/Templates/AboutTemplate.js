import React from "react";
import {AboutContainer, WaveNum1, WaveNum2} from "../Styles/QuizStyles.js";
import waveNumber1 from "../../../Images/SVG/quiz-wave-1.svg";
import waveNumber2 from "../../../Images/SVG/quiz-wave-2.svg";

class AboutTemplate extends React.Component {
    render(){
        return (
            <AboutContainer className = "the-magical-about-container" style = {{background: this.props.quizColour, height: this.props.displayAbout}}>
                <WaveNum1 src = {waveNumber1} alt = {waveNumber1} />
                <WaveNum2 src = {waveNumber2} alt = {waveNumber2} />
                <div>
                    <span onClick = {this.props.exitAboutPage} className = "quitQuiz" > X </span>
                    <h1> Time to take the quiz! </h1>
                    <h3> What are the rules? </h3>
                    <ul>
                        <li>You must complete the quiz before the timer runs out or you fail</li>
                        <li>All answers are multiple choice, you can only select one answer</li>
                        <li>To unlock more content you need full marks! </li>
                        <li>You can exit the quiz at anytime by clicking the 'X' in the top left corner of the quiz</li>
                    </ul>
                    <button style = {{background: this.props.quizColour}} onClick = {this.props.startQuiz}> Play! </button>
                </div>
            </AboutContainer>
        )
    }
}


export default AboutTemplate