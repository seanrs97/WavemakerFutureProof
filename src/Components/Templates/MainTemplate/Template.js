import React from "react";
import {DisplayContent, UnlockableContent, HideContent} from "./TemplateStyles";
import Header from "../ContentTemplates/Header.js";
import Resources from "../ContentTemplates/Resources.js";
import Quiz from "../../Quiz/Quiz.js";

import What from "../ContentTemplates/What.js";
import Why from "../ContentTemplates/Why.js";
import How from "../ContentTemplates/How.js";
import Navigation from "../Navigation/Navigation.js";

import sal from "sal.js";
import '../../../../node_modules/sal.js/dist/sal.css';

import NavBar from "../../NavBar/NavBar.js";

import userLoggedOut from "../../../Images/userLoggedOut.svg";

class Template extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showUnlockableContent: "none",
            value_key: "",
            quiz_desc_value: "start",

            displayLoginMessage: "block",
            displayLoginContent: "none",

            displayLoggedInAvatar: "",
            displayNavBarLoginMessage: "",
            loginOrLogout: "",
            userProfileLink: "",
            quizDescription: "",

            isLoggedIn: localStorage.getItem("isLoggedIn") || 0
        }
    }
    async componentDidMount(){
        // SDK Login method
        this.checkIfUserIsLoggedIn();
        this.quizHasNotBeenCompleted();

        let baseURL = 'https://seanrs97.github.io/jsonData/userProfile.json';

        const self = this;
        fetch(baseURL).then(response => {
          if(response.ok){
            response.json().then(data => {    
              self.setState({
                  nickname: data[0].data.nickname,
                  quizzesCompleted: data[0].data.quizzesCompleted,
                  profilePicture: data[0].data.profilePicture,
              })
            });
            this.setState({
                status: response.status
            });
          }
        });
    }
    componentDidUpdate(prevProps, prevState){
        sal({
            once: false
        });

        if(this.props !== prevProps){
            this.setState({
                pageQuizId: this.props.quizId
            });   
        }
        this.checkIfQuizIsComplete();
    }

    checkIfQuizIsComplete = () => {


        if(this.state.pageQuizId !== undefined && this.state.pageQuizId !== null){
            let quizId = this.state.pageQuizId;

            if(this.state.quizzesCompleted.indexOf(quizId) > -1){
                console.log("Quiz has been completed");
                this.setState({
                    quizDescription: "Well done, the quiz is complete!"
                })
            } else {
                console.log("QUIZ HAS NOT BEEN COMPLETED")
            }
        }
    }
    async fetchQuiz(){
        try {
            const sdk = window.futureproofSdk();
            const quiz = await sdk.quizzes.get("6rmJrdxlWl54wvS5KkVc"); 
    
            console.log("QUIZ", quiz);
    
            return quiz;
        } catch (e){
            // this.setState({
            //     quizDescription: "It doesn't look like this section has a quiz! Sorry about that",
            //     buttonDisabled: true,
            //     buttonHidden: "0.5"
            // })
        }
    }
    quizHasNotBeenCompleted = () => {
        if(this.state.loginStatus === 401){
            this.setState({
                quizDescription: "You need to login to complete the quiz!"
            })
        } else {
            this.setState({
                quizDescription: "You haven't completed the quiz yet! click the play button to start!"
            });
            this.fetchQuiz();
        }
    }

    // Check to see if user is logged in or not
    async checkIfUserIsLoggedIn(){
        // USER IS LOGGED IN
        try {
            const sdk = window.futureproofSdk();
            const userIsLoggedIn = await sdk.auth.session(); 

            
            this.displayUserInformation();

            console.log("USER LOGGEDIN", userIsLoggedIn)
            this.setState({
                displayLoginMessage: "none",
                displayLoginContent: "block",
                loginOrLogout: "Logout",
                loginHref: "https://wm-educational-pwa-dev.web.app/",
                userProfileLink: "https://wm-educational-pwa-dev.web.app/profile/",

                buttonHidden: "1",
                buttonCursor: "pointer"
            });

            setTimeout(() => {
                this.setState({
                    displayLoggedInAvatar: this.state.userProfilePicture
                })
            }, 1000);

            if(this.state.quizDescription !== "It doesn't look like this section has a quiz! Sorry about that"){
                this.setState({
                    buttonDisabled: false,
                    buttonHidden: "1"
                })
            } else {
                this.setState({
                    buttonDisabled: true,
                    buttonHidden: "0.5"
                })
            }

            return userIsLoggedIn;

        } catch (e) {
            console.log("ERROR", e);
            this.setState({
                loginStatus: e.status,
                loginUrl: e.urlWithRedirect,
                displayLoggedInAvatar: `${userLoggedOut}`,
                loginOrLogout: "Login",

                // REAL ONES 
                // loginHref: "https://dev.wavemakerfutureproof.co.uk/login",
                // userProfileLink: "https://dev.wavemakerfutureproof.co.uk/login",

                userProfileLink: "https://wm-educational-pwa-dev.web.app/login",
                loginHref: "https://wm-educational-pwa-dev.web.app/login",
                buttonDisabled: true,
                buttonHidden: "0.5",
                buttonCursor: "cursor"
            });
            
            this.setState({
                buttonDisabled: false,
                buttonHidden: "1"
            })

            console.log(this.state.loginStatus);
        }
    }
    async displayUserInformation(){
        const sdk = window.futureproofSdk();
        const user = await sdk.user.profile();

        if(user.data.profilePicture.length >= 1){
            this.setState({
                userProfilePicture: user.data.profilePicture,
            })
        } else {
            this.setState({
                userProfilePicture: {userLoggedOut}
            })  
        }
        this.setState({
            userName: user.data.nickname,
            quizzesCompleted: user.data.quizzesCompleted
        });
        setTimeout(() => {
            this.setState({
                userProfilePicture: user.data.profilePicture
            })
        }, 2000)

        return user;
    }
    render(){
        return (
            <div className = "main_container" style = {{display: this.state.is404PagePresent}}>
                {/* <NavBar
                    showLoggedInImage = {this.state.displayLoggedInAvatar}
                    loginOrLogout = {this.state.loginOrLogout}
                    loginHref = {this.state.loginHref}
                    userProfileLink = {this.state.userProfileLink}
                /> */}
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
                <Quiz 
                    onFinished = {this.handleFinish} 
                    style = {{overflowY: "scroll"}} 
                    // quiz = {this.props.quiz} 
                    quizColour = {this.props.headerColour} 
                    quizDescription = {this.state.quizDescription}
                    buttonDisabled = {this.state.buttonDisabled}
                    buttonHidden = {this.state.buttonHidden}
                    buttonCursor = {this.state.buttonCursor}
                    quizNotFound = {this.state.quizNotFound}
                />
{/* 
                <DisplayContent style = {{background: this.props.headerColour, display: this.state.displayLoginMessage}}>
                    <div>
                        <h1> Want to view more content? </h1>
                        <p className = "content-desc"> I'm afraid you'll need to login to view anymore content. Please click on the button below to login or sign up!</p>
                        <button onClick = {this.proceedToLoginPage}><a id = "quiz" href = {this.state.loginUrl} >Login</a></button>
                    </div>
                </DisplayContent> */}

                {/* <UnlockableContent style = {{display: this.state.displayLoginContent}}>
                    <HideContent style = {{display: this.props.display}}></HideContent> */}
                    <Resources resources = {this.props.resources}/>
                {/* </UnlockableContent> */}

                <Navigation {...this.props}/>
            </div>
        )
    }
}

export default Template;