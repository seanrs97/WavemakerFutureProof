import IsEmpty from "./IsEmpty";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const showOptions = (options) => {
    options = Array.from(document.querySelectorAll(options));
    options.forEach(option => {
        option.style.visibility = "visible";
    });
}
export const showTargetElement = (component) => {
    disableBodyScroll(component.targetElement);
  };
export const hideTargetElement = (component) => {
    enableBodyScroll(component.targetElement);
};
export const displayQuestions = (questions, currentQuestion, nextQuestion, previousQuestion, component) => {
    let { currentQuestionIndex } = component.state;

    if(!IsEmpty(component.state.questions)){
        questions = component.state.questions;
        currentQuestion =  questions[currentQuestionIndex];
        nextQuestion = questions[currentQuestionIndex + 1];
        previousQuestion = questions[currentQuestionIndex - 1];

        component.setState({ 
            currentQuestion, 
            nextQuestion,
            previousQuestion,
            previousRandomNumber: [],
        }, () => {
            showOptions(".option");
        });
    }
}
export const startGame = (component) => {
    let {currentQuestionIndex} = component.state;

    let questions = component.state.questions;
    let currentQuestion = component.state.questions[currentQuestionIndex];
    let nextQuestion = component.state.questions[currentQuestionIndex + 1];
    let previousQuestion = component.state.questions[currentQuestionIndex - 1];
    let answer = component.state.questions[currentQuestionIndex].answer;

    if(questions.length === 0 || questions === undefined || currentQuestion.length === 0 || currentQuestion === undefined){
        console.log("somethings gone wrong here")
    } else {
        component.setState({
            questions: questions,
            currentQuestion:currentQuestion,
            nextQuestion: nextQuestion,
            previousQuestion: previousQuestion, 
            numberOfQuestions: questions.length,
            answer:  answer
        });
    }
}

// submitQuiz = () => {
//     // SEND THIS TO BACKEND TO BE CHECKED 
//     console.log("answered questions", this.state.answeredQuestions);

//     fetch("http://backendServer/api/quiz/answers", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(this.state.answeredQuestions)
//         .then((result) => {
//             if(result.json().wonQuiz === true){
//                 this.setState({
//                     quizWon: true
//                 })
//             } else {
//                 this.setState({
//                     quizWon: false
//                 });
//             }
//         })
//     })
// }

export const getBadge = async (component, id) => {
    const {state} = component;

    try {
        const sdk = window.futureproofSdk();
    
        const getBadge = await sdk.badges.get(id);

        component.setState({
            badgeUrl: getBadge.data.imgUrl,
            badgeName: getBadge.data.name
        });

        console.log(component.state);
        return getBadge;
    } catch (e) {
        console.log("ERROR FETCHING BADGE", e);
    }
}

// export const quizBadgeWon = (component) => {

//     component.setState({
//         isSummaryDisplayed: "visible",
//         showSummary: "appear .6s linear forwards",
//     });
    
//     setTimeout(() => {
//         component.setState({
//             quizBadgeShowHeight: "scaleY(1)",
//             quizBadgeShowVisibility: "visible"
//         });
//     }, 2000)
// }
export const closeBadgeWon = (component) => {
    component.setState({
        quizBadgeShowHeight: "scaleY(0)",
        quizBadgeShowVisibility: "hidden"
    });
}
export const submitBadge = async (component) => {
    try {
        const sdk = window.futureproofSdk();
        const submitBadge = await sdk.badges.submit(component.state.badgeId);

        return submitBadge
    } catch (e) {
        console.log("ERROR SUBMITTING BADGE", e);
    }
}
export const submitQuiz = async (component) => {
    const {state} = component;

    try {
        const sdk = window.futureproofSdk();
        const submit = await sdk.quizzes.submit(component.state.quizId, component.state.answeredQuestions);

        component.setState({
            quizPoints: submit.data.points  
        });

        setTimeout(() => {
            // PLAYER STATS
            const pointsWon = component.state.quizPoints;
            const numOfQuestions = component.state.questions.length;
            const pointsNeededToWin = numOfQuestions * 10;

            console.log("You scored " + submit.data.points)
            let playerResult = "failed";
            let successMessage = "Please try again!";

            const playerStats = { numberOfQuestions: component.state.numberOfQuestions };        

            if(pointsNeededToWin - pointsWon === 0){
                playerResult = "passed"
                successMessage = "Well done, you can now move on!"
                setTimeout(() => {
                    component.setState({
                        showConfetti: "block",
                        quizPassed: true
                    });
                }, 400);

                // BADGE
                // console.log(component.props.doesBadgeExist);
                if(component.props.doesBadgeExist.includes(component.state.badgeId)){
                    console.log("Badge has already been awarded to this user")
                    component.setState({
                        quizBadgeShowHeight: "scaleY(0)",
                        quizBadgeShowVisibility: "hidden"
                    });
                } else {
                    console.log("First time user has achieved badge!")
                    setTimeout(() => {
                        component.setState({
                            quizBadgeShowHeight: "scaleY(1)",
                            quizBadgeShowVisibility: "visible"
                        });
                    }, 1200);
                }
                component.setState({
                    isSummaryDisplayed: "visible",
                    showSummary: "appear .6s linear forwards",
                });
            } else {
                console.log("Unlucky better luck next time");
                component.setState({
                    quizPassed: false
                });
            }
            component.setState({
                endScore: component.state.quizPoints,
                endNumOfQuestions: numOfQuestions * 10,
                endNumOfAnsweredQuestions: playerStats.numberOfAnsweredQuestions,
                success: playerResult,
                successMessage: successMessage,
            });

            component.setState({
                isSummaryDisplayed: "visible"
            })
            component.setState({
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
            clearInterval(component.interval);
        }, 300);

        return submit;
    } catch (e) {
        console.log("ERROR SUBMITTING QUIZ", e);
    }
}
export const end  = (component) => {

    // let playerResult = "failed";
    // let successMessage = "Please try again!";

    // console.log("answered questions", component.state.answeredQuestions);

    // const playerStats = {
    //     score: component.state.score,
    //     numberOfQuestions: component.state.numberOfQuestions,
    //     numberOfAnsweredQuestions: component.state.numberOfAnsweredQuestions,
    // };




// NEEEEEED

    // if(playerStats.score === playerStats.numberOfQuestions){
    //     playerResult = "passed"
    //     successMessage = "Well done, you can now move on!"
    //     setTimeout(() => {
    //         component.setState({
    //             showConfetti: "block"
    //         });
    //     }, 800)
    // }
    // component.setState({
    //     endScore: playerStats.score,
    //     endNumOfQuestions: playerStats.numberOfQuestions,
    //     endNumOfAnsweredQuestions: playerStats.numberOfAnsweredQuestions,
    //     endNumberOfCorrectAnswers: playerStats.correctAnswers,
    //     endNumberOfWrongAnswers: playerStats.wrongAnswers,
    //     success: playerResult,
    //     successMessage: successMessage,

    // });







    // component.setState({
    //     isSummaryDisplayed: "visible"
    // })
    // component.setState({
    //     showQuestions: "none",
    //     numberOfAnsweredQuestions: 0,
    //     currentQuestionIndex: playerStats.numberOfQuestions - 1,
    //     time: {
    //         minutes: 0,
    //         seconds: 0
    //     },
    //     showSummary: "appear .6s linear forwards",
    //     displayQuiz: "translateX(-100%) scale(0)",
    // });
    // clearInterval(component.interval);



    // NEEEEEEEEEEEEEEEEEEEEEEED

    // if(component.state.successMessage === undefined || component.state.successMessage === "passed"){
    //     component.setState({
    //         unlockContent: "block"
    //     })
    // }
}
export const returnHome = (component) => {
    component.setState({
        quizShow: "none",
        quizScale: "0",
        showMainOverlay: "none",
        overlayVisibility: "hidden",
        overlayOpacity: 0
    });
    hideTargetElement(component);
}