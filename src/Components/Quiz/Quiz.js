// To find where data is being pulled from, check ComponentDidMount
// To find how questions are being displayed, check the DisplayQuestions method
// To find how the quiz is being submitted, check the SubmitQuiz method. >> Note this is just a mock up and isn't in use currently

// To find the JSON file for the quiz, go to the public folder and then jsonfiles/example-quiz.json

// To find the HTML is being rendered to the UI, check the Render Method
// To find any styles, check the Styled components at the bottom of the page

import React from "react";

// STYLESHEET 
import {ContentWrapper, QuizAndSummaryContainer, QuizContainer, DialogContainer, 
        OverlayContainer, Container, SummaryContainer} from "./Styles/QuizStyles.js";

// METHODS
import {showOptions, showTargetElement, hideTargetElement, startTimer, displayQuestions,
        startGame, end} from "./QuizMethods.js";
import HomeTemplate from "./Templates/HomeTemplate.js";
import AboutTemplate from "./Templates/AboutTemplate.js";
import QuizFeatures from "./Templates/QuizFeatures.js";
import Summary from "./Templates/Summary";

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
                showOptions(".option");
            }
            displayQuestions(
                this.state.questions,
                this.state.currentQuestion,
                this.state.nextQuestion,
                this.state.previousQuestion,
                this
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
    openAbout = () => {
        let quizScaleSize;
        if(window.innerWidth < 580){
            quizScaleSize = "100%"
        } else if(window.innerWidth >= 580 && window.innerWidth <= 1400) {
            quizScaleSize = "94%"
        }else {
            quizScaleSize = "88%"
        }
        this.setState({
            showSummary: "dissapear .6s linear forwards",
        });
        setTimeout(() => {
            this.setState({
                isSummaryDisplayed: "hidden",
                quizScale: quizScaleSize,
                displayAbout: "100%",
            })
        }, 500)
    }
    startQuiz = () => {
        setTimeout(() => {
            this.setState({
                displayQuiz: "translateX(0) scale(1)",
                quizShow: "block",
                showMainOverlay: "block",

                overlayVisibility: "visible",
                overlayOpacity: 0.7,
                displayAbout: "0%"
            }); 
        }, 800);
        showTargetElement(this);
        startGame(this);
        startTimer(this);
        if(this.state.currentQuestionIndex !== 0){
            this.resetQuiz();
        }
    }
    resetQuiz = () => { 
        clearInterval(this.interval);
        showOptions(".option");
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
        startTimer(this);
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
                    end(this);
                } else {
                    displayQuestions(
                        this.state.questions,
                        this.state.currentQuestion,
                        this.state.nextQuestion,
                        this.state.previousQuestion,
                        this
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
                    end(this);
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
        hideTargetElement(this);
    }
    exitAboutPage = () => {
        this.setState({
            displayAbout: "0%",
            displayQuiz: "translateX(0) scale(1)",
            showOverlay: "none",
            quizShow: "none",
            quizScale: "0",
            showMainOverlay: "none",
        })
    }
    returnHome = () => {
        this.setState({
            quizShow: "none",
            quizScale: "0",
            showMainOverlay: "none",
            overlayVisibility: "hidden",
            overlayOpacity: 0
        });
        hideTargetElement(this);
    }
    render(){
        const {
            endScore,
            endNumOfQuestions,
            success,
            successMessage,
        } = this.state;

        return (
            <React.Fragment>
                <HomeTemplate 
                    homeAppear = {this.state.homeAppear} 
                    openAbout = {this.openAbout}
                    buttonDisabled = {this.props.buttonDisabled}
                    buttonHidden = {this.props.buttonHidden}
                    buttonCursor = {this.props.buttonCursor}
                    quizColour = {this.props.quizColour}
                    quizDescription = {this.props.quizDescription}
                />
                <ContentWrapper onScroll = {this.handleScroll} style = {{animation: this.state.doesQuizExist, display:this.state.entireQuizVisibility}}>
                    <QuizAndSummaryContainer id = "quizAndSummary" style = {{height: this.state.quizScale}}>
                        <AboutTemplate
                            quizColour = {this.props.quizColour}
                            displayAbout = {this.state.displayAbout}
                            exitAboutPage = {this.exitAboutPage}
                            startQuiz = {this.startQuiz}
                        />
                        <QuizContainer>
                            <div style = {{position: "relative"}}>
                            <DialogContainer style = {{display: this.state.showDialog, zIndex: "100000001"}}>
                                <h1> Are you sure you want to quit the quiz? </h1>
                                <button onClick = {this.exitQuiz}> Yes </button>
                                <button onClick = {this.resumeQuiz}> No </button>
                            </DialogContainer>
                            <OverlayContainer style = {{display: this.state.showOverlay, zIndex: "100000000"}}/>

                            <Container style = {{background: this.props.quizColour}}>
                                <QuizFeatures
                                    quizColour = {this.props.quizColour}
                                    quitQuiz = {this.quitQuiz}
                                    questionDisplay = {this.state.questionDisplay}
                                    optionDisabled = {this.state.optionDisabled}
                                    handleOptionClick = {this.handleOptionClick}
                                    showTimeMessage = {this.state.showTimeMessage}
                                    currentQuestion = {this.state.currentQuestion}
                                    currentQuestionIndex = {this.state.currentQuestionIndex}
                                    numberOfQuestions = {this.state.numberOfQuestions}
                                    time = {this.state.time}
                                />
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