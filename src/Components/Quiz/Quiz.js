// To find where data is being pulled from, check ComponentDidMount
// To find how questions are being displayed, check the DisplayQuestions method
// To find how the quiz is being submitted, check the SubmitQuiz method. >> Note this is just a mock up and isn't in use currently

// To find the JSON file for the quiz, go to the public folder and then jsonfiles/example-quiz.json

// To find the HTML is being rendered to the UI, check the Render Method
// To find any styles, check the Styled components at the bottom of the page


import React from "react";

// STYLESHEET 
import {ContentWrapper, Home, QuizAndSummaryContainer, QuizContainer, DialogContainer, 
        OverlayContainer, H5, OptionsContainer, Container, LifelineContainer, 
        TimeMessage, SummaryContainer} from "./QuizStyles.js";

// METHODS

import IsEmpty from "./IsEmpty";
import Summary from "./Summary";

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import QuizImage1 from "../../Images/SVG/quiz-wave-1.svg";
import QuizImage2 from "../../Images/SVG/quiz-wave-2.svg";

class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quizData: this.props.quiz,

             // Quiz functionality states
             questions: [],
             currentQuestion: {},
             nextQuestion: {},
             previousQuestion: {},
             answer: "",
             numberOfQuestions: 0,
             numberOfAnsweredQuestions: 0,
             currentQuestionIndex: 0,
             score: 0,
             nextButtonDisabled: false, 
             previousButtonDisabled: true,
             previousRandomNumber: [],
             disableButtons: false,
             time: {},
 
             // Show / Hide components and return states 
             showQuestions: "block",
             showSummary: " ",
             showDialog: "none",
             showOverlay: "none",
             returnHome: false,
             displayQuiz: "translateX(-100%) scale(0)",
             answerMessage: "",
             showConfetti: "none",
             optionDisabled: true,
             backgroundChange: "#23758b",
             homeAppear: "",
             doesQuizExist: "",
             questionDisplay: "",
             showTimeMessage: "translateX(-100%)",

             answeredQuestions: [],

             quizShow: "",
             quizScale: "0",

             showMainOverlay: "none",
             overlayOpacity: "0",
             overlayVisibility: "hidden",  


             entireQuizVisibility: "",
             isSummaryDisplayed: "hidden"
        }
        this.interval = null
        this.targetElement = null;
    }
    async componentDidMount(){
        const quizData = await (await (fetch("/quiz-web.json"))).json();

        // Check if quiz exists
        if(quizData.status === 200){
            this.setState({
                quizData: quizData.data,
                questions: quizData.data.questions,
                quizId: quizData.data.id
            });
            if(this.state.currentQuestionIndex !== 0){
                this.setState({
                    currentQuestionIndex: 0,
                    score: 0
                });
                this.showOptions();
            }
            this.displayQuestions(
                this.state.questions,
                this.state.currentQuestion,
                this.state.nextQuestion,
                this.state.previousQuestion
            )
            if(this.state.isSummaryDisplayed !== "dissapear .6s linear forwards"){
                this.setState({
                    isSummaryDisplayed: "dissapear .6s linear forwards"
                })
            } else {
                this.setState({
                    entireQuizVisibility: "none"
                });
            }

            this.checkIfQuizExists();
        } else {
            console.log("QUIZ DOES NOT EXIST");
            this.setState({
                entireQuizVisibility: "none"
            })
        }         

        setTimeout(() => {
            this.setState({
                isSummaryDisplayed: "visible"
            })
        }, 2200);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = this.state;

        if(!IsEmpty(this.state.questions)){
            questions = this.state.questions;
            currentQuestion =  questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];

            this.setState({ 
                currentQuestion, 
                nextQuestion,
                previousQuestion,
                previousRandomNumber: [],
            }, () => {
                this.showOptions();
            });
        }
    }
    showOptions = () => {
        const options = Array.from(document.querySelectorAll(".option"));
        options.forEach(option => {
            option.style.visibility = "visible";
        });
    }
    startGame = () => {
        let {currentQuestionIndex} = this.state;

        let questions = this.state.questions;
        let currentQuestion = this.state.questions[currentQuestionIndex];
        let nextQuestion = this.state.questions[currentQuestionIndex + 1];
        let previousQuestion = this.state.questions[currentQuestionIndex - 1];
        let answer = this.state.questions[currentQuestionIndex].answer;

        if(questions.length === 0 || questions === undefined || currentQuestion.length === 0 || currentQuestion === undefined){
            console.log("somethings gone wrong here")
        } else {
            this.setState({
                questions: questions,
                currentQuestion:currentQuestion,
                nextQuestion: nextQuestion,
                previousQuestion: previousQuestion, 
                numberOfQuestions: questions.length,
                answer:  answer
            });
        }
    }
    // Starts the countdown Timer displayed in the Lifeline section of the quiz. Just a simple countdown clock.
    startTimer = () => {
        const countdownTime = Date.now() + 13000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countdownTime - now;
            const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000 );
            
            if(seconds <= 15){
                this.setState({
                    showTimeMessage: "translateX(0)"
                });
                setTimeout(() => {
                    this.setState({
                        showTimeMessage: "translateX(-100%)"
                    })
                }, 3000);
            }
            if(distance < 0){
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.end();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }
    startQuiz = () => {
        let quizScaleSize;
        if(window.innerWidth < 580){
            quizScaleSize = "100%"
        } else if(window.innerWidth >= 580 && window.innerWidth <= 1400) {
            quizScaleSize = "94%"
        }else {
            quizScaleSize = "88%"
        }
        this.setState({
            isSummaryDisplayed: "hidden"
        });

        if(this.props.canUserPlayQuiz === true){
            console.log("User is logged in and can play quiz")
        } else {
            console.log("User is not logged in and cannot play quiz")
        }
        setTimeout(() => {
            this.setState({
                displayQuiz: "translateX(0) scale(1)",
                quizShow: "block",
                quizScale: quizScaleSize,
                showMainOverlay: "block",

                overlayVisibility: "visible",
                overlayOpacity: 0.7
            }); 
        }, 800);
        this.showTargetElement();
        this.startGame();
        this.startTimer();
        if(this.state.currentQuestionIndex !== 0){
            this.resetQuiz();
        }
    }
    resetQuiz = () => { 
        clearInterval(this.interval);
        this.showOptions();
        this.setState({
            showQuestions: "block",
            currentQuestionIndex: 0,
            currentQuestion: this.state.questions[0],
            nextQuestion: this.state.questions[0 + 1],
            answer: this.state.questions[0].answer,
            previousQuestion: undefined,
            endNumOfQuestions: 0,
            endNumOfAnsweredQuestions: 0,
            success: "",
            successMessage: "",
            score: 0,
            endScore: 0,
            showSummary: "dissapear .6s linear forwards",
            isSummaryDisplayed: "visible",
            displayQuiz: "translateX(0) scale(1)",
            showConfetti: "none",
            questionDisplay: "translateX(0)"

        });
        this.startTimer();
    }
    handleOptionClick = (e) => {
        this.setState({
            questionDisplay: "translateX(350%)",
            answeredQuestions: [...this.state.answeredQuestions, e.target.innerHTML.toLowerCase()]
        });
        setTimeout(() => {
            this.setState({
                questionDisplay: "translateX(0)"
            });
            this.setState(prevState => ({
                score: prevState.score + 1,
                currentQuestionIndex: prevState.currentQuestionIndex +1,
                numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
                answerMessage: ""
            }), () => {
                if(this.state.nextQuestion === undefined){
                    this.setState({
                        questionDisplay: "translateX(900%)"
                    });
                    this.end();
                } else {
                    this.displayQuestions(
                        this.state.questions,
                        this.state.currentQuestion,
                        this.state.nextQuestion,
                        this.state.previousQuestion
                    )
                }
            })
        }, 1000)
    }
    // THIS IS WHERE WE LIKELY SEND THE QUESTIONS BACK TO THE BACKEND
    submitQuiz = () => {
        // SEND THIS TO BACKEND TO BE CHECKED 
        console.log("answered questions", this.state.answeredQuestions);

        fetch("http://backendServer/api/quiz/answers", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state.answeredQuestions)
            .then((result) => {
                if(result.json().wonQuiz === true){
                    this.setState({
                        quizWon: true
                    })
                } else {
                    this.setState({
                        quizWon: false
                    });
                }
            })
        })
    }

    // SHOW PLAYERS RESULTS
    end  = () => {
        const { state } = this;
        let playerResult = "failed";
        let successMessage = "Please try again!";

        console.log("answered questions", this.state.answeredQuestions);

        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        };

        if(playerStats.score === playerStats.numberOfQuestions){
            playerResult = "passed"
            successMessage = "Well done, you can now move on!"
            setTimeout(() => {
                this.setState({
                    showConfetti: "block"
                });
            }, 800)
        }
        this.setState({
            endScore: playerStats.score,
            endNumOfQuestions: playerStats.numberOfQuestions,
            endNumOfAnsweredQuestions: playerStats.numberOfAnsweredQuestions,
            endNumberOfCorrectAnswers: playerStats.correctAnswers,
            endNumberOfWrongAnswers: playerStats.wrongAnswers,
            success: playerResult,
            successMessage: successMessage,

        });
        this.setState({
            isSummaryDisplayed: "visible"
        })
        this.setState({
            showQuestions: "none",
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: playerStats.numberOfQuestions - 1,
            time: {
                minutes: 0,
                seconds: 0
            },
            showSummary: "appear .6s linear forwards",
            displayQuiz: "translateX(-100%) scale(0)",
        });
        clearInterval(this.interval);


        if(this.state.successMessage === undefined || this.state.successMessage === "passed"){
            this.setState({
                unlockContent: "block"
            })
        }
    }
    // Used when the user selects 'no' from the dialog menu to resume the quiz
    resumeQuiz = () => {
        this.setState({
            showDialog: "none",
            showOverlay: "none"
        });
        const currentTime = this.state.time.seconds + "000";
        const resumeTime = parseInt(currentTime) ;

        const countdownTime = Date.now() + resumeTime;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countdownTime - now;
            const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000 );

            if(distance < 0){
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    this.end();
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }
    quitQuiz = () => {
        this.setState({
            showDialog: "block",
            showOverlay: "block",
        });
        clearInterval(this.interval);
    }
    quitLogin = () => {
        this.setState({
            canUserPlayQuiz: "0"
        })
    }
    exitQuiz = () => {
        this.setState({
            showDialog: "none",
            showOverlay: "none",
            displayQuiz: "translateX(0) scale(1)",

            quizShow: "none",
            quizScale: "0",
            showMainOverlay: "none",

            overlayVisibility: "hidden",
            overlayOpacity: 0
        });
        this.hideTargetElement();
    }
    returnHome = () => {
        this.setState({
            quizShow: "none",
            quizScale: "0",
            showMainOverlay: "none",
            overlayVisibility: "hidden",
            overlayOpacity: 0
        });
        this.hideTargetElement();
    }
    showTargetElement = () => {
        disableBodyScroll(this.targetElement);
      };
     
    hideTargetElement = () => {
        enableBodyScroll(this.targetElement);
    };


    // CHECK TO SEE IF QUIZZES HAVE BEEN COMPLETED
    async checkIfQuizExists() {
        let quizId = this.state.quizId;

        const sdk = window.futureproofSdk();
        const quizInfo = await sdk.user.profile();

        this.setState({
            quizzesCompleted: quizInfo.data.quizzesCompleted
        });
        if(this.state.quizzesCompleted.indexOf(quizId) > -1){
            console.log("THIS QUIZ IS COMPLETE")
        } else {
            console.log("QUIZ NOT COMPLETE");
        }

        console.log("QUIZ INFO" , quizInfo);
    }
    render(){
        const {
            currentQuestion, 
            currentQuestionIndex, 
            numberOfQuestions, 
            time,
            endScore,
            endNumOfQuestions,
            success,
            successMessage,
        } = this.state;

        return (
            <React.Fragment>
                <div style = {{
                    position: "fixed", 
                    height: "100vh",
                    width: "100%",
                    background: "grey",
                    top: "0",
                    left: "0",
                    zIndex: "1000000000000000000",
                    transition: "1s all",

                    visibility: this.state.overlayVisibility,
                    opacity: this.state.overlayOpacity
                }}></div>
                <ContentWrapper onScroll = {this.handleScroll} style = {{animation: this.state.doesQuizExist, display:this.state.entireQuizVisibility}}>
                    <Home style = {{animation: this.state.homeAppear, background: this.props.quizColour, marginBottom: "20px"}}>
                        <div className = "content-container">
                            <h1> Quiz </h1>
                            <div className = "button-container">
                                <button 
                                    onClick = {this.startQuiz} 
                                    disabled = {this.props.buttonDisabled}
                                    style = {{opacity: this.props.buttonHidden, cursor: this.props.buttonCursor}}
                                >
                                        Start
                                </button> 
                            </div>
                        </div>
                        <div className = "quiz-description">
                            <p> {this.props.quizDescription} </p>
                        </div>
                        <img alt = "background of wave" src = {QuizImage1} className = "top-quiz-wave" />
                        <img alt = "background of wave" src = {QuizImage2} className = "bottom-quiz-wave"/>
                    </Home>
                    <QuizAndSummaryContainer id = "quizAndSummary" style = {{height: this.state.quizScale}}>
                        <QuizContainer>
                            <div style = {{position: "relative"}}>
                            <DialogContainer style = {{display: this.state.showDialog, zIndex: "100000001"}}>
                                    <h1> Are you sure you want to quit the quiz? </h1>
                                    <button onClick = {this.exitQuiz}> Yes </button>
                                    <button onClick = {this.resumeQuiz}> No </button>
                                </DialogContainer>
                                <OverlayContainer style = {{display: this.state.showOverlay, zIndex: "100000000"}}/>


                                <Container style = {{background: this.props.quizColour}}>
                                    <span onClick = {this.quitQuiz} className = "quitQuiz" > X </span>
                                    <div className = "main-content-container">
                                        <p style = {{transform: this.state.questionDisplay}} className = "numberOfQuestionsContainer">
                                            <span className = "qNumber">
                                                Question {currentQuestionIndex + 1} of {numberOfQuestions}
                                            </span>
                                        </p>
                                        <H5 style = {{transform: this.state.questionDisplay}}> {currentQuestion.text} </H5>
                                        <OptionsContainer style = {{transform: this.state.questionDisplay}}>
                                            {!!currentQuestion.answers && currentQuestion.answers.map((ans) =>
                                                <button key = {ans.text} style = {{transform: this.state.questionDisplay}} disabled = {!this.state.optionDisabled} className = "option" onClick = {this.handleOptionClick}> {ans.text}</button>
                                            )}
                                        </OptionsContainer>
                                        <LifelineContainer style = {{transform: this.state.questionDisplay}}>
                                            <p>
                                                <span className = "timer help-icon"></span>
                                                <span className = "">{time.minutes}:{time.seconds}</span>
                                            </p>
                                        </LifelineContainer>
                                    </div>
                                    <TimeMessage style = {{transform: this.state.showTimeMessage}}>
                                        <h1> Time is Running Out! </h1>
                                    </TimeMessage>
                                </Container>
                            </div>
                        </QuizContainer>
                        <SummaryContainer style = {{animation: this.state.showSummary, visibility: this.state.isSummaryDisplayed}}>
                            <Summary
                                    quizColour = {this.props.quizColour}
                                    score = {endScore}
                                    numOfQuestions = {endNumOfQuestions}
                                    success = {success}
                                    successMessage = {successMessage}
                                    playAgain = {this.resetQuiz}
                                    homeReturn = {this.returnHome}
                                    showConfetti = {this.state.showConfetti}

                                    style = {{background: this.props.quizColour}}
                                />
                        </SummaryContainer>
                    </QuizAndSummaryContainer>
                </ContentWrapper>
            </React.Fragment>
        )
    }
}

export default Quiz;
