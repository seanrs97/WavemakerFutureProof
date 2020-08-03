import React from "react";
import {DisplayContent, UnlockableContent, HideContent} from "./TemplateStyles";
import Header from "./ContentTemplates/Header.js";
import Resources from "./ContentTemplates/Resources.js";
// import Banner from "./Templates/Banner.js";
import Quiz from "../Quiz/Quiz.js";

import What from "./ContentTemplates/What.js";
import Why from "./ContentTemplates/Why.js";
import How from "./ContentTemplates/How.js";
import Navigation from "./Navigation.js";

import sal from "sal.js";
import '../../../node_modules/sal.js/dist/sal.css';

import NavBar from "../NavBar.js";

import userLoggedOut from "../../Images/userLoggedOut.svg";

// import Login from "./Login";

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
            quizDescription: ""
        }
        this.stopUserSession = this.stopUserSession.bind(this)
    }
    async componentDidMount(){
        // SDK Login method
        this.checkIfUserIsLoggedIn();

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
    componentDidUpdate(){
        sal({
            once: false
        });
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
                buttonDisabled: false,
                buttonHidden: "1",
                buttonCursor: "pointer"
            });

            setTimeout(() => {
                this.setState({
                    displayLoggedInAvatar: this.state.userProfilePicture
                })
            }, 1000)

            // Need to check if quiz has bee completed here
            this.setState({
                quizDescription: "You haven't completed the quiz yet! simply click the start button to start playing, good luck!"
            });

            return userIsLoggedIn;

        } catch (e) {
            this.setState({
                loginUrl: e.urlWithRedirect,
                displayLoggedInAvatar: `${userLoggedOut}`,
                loginOrLogout: "Login",
                loginHref: "https://wm-educational-pwa-dev.web.app/login",
                userProfileLink: "https://wm-educational-pwa-dev.web.app/login",
                quizDescription: "You need to be logged in to completed the quiz. To login, simply click the login button just below and login or signup!",
                buttonDisabled: true,
                buttonHidden: "0.5",
                buttonCursor: "auto"
            });
        }
    }
    async stopUserSession(){
        const sdk = window.futureproofSdk();
        const stopSession = await sdk.auth.stopSession();

        console.log("SESSION STOPPED", stopSession);

        return stopSession;
    }
    checkLoginText(){

        // this.setState({
        //     logDestination: 
        // });
        this.stopUserSession();

    }
    // async startUserSession(){
    //     const sdk = window.futureproofSdk();
    //     const userSession = await sdk.auth.startSession();

    //     console.log("USER SESSION", userSession);

    //     return userSession;
    // }
    async displayUserInformation(){
        const sdk = window.futureproofSdk();
        const user = await sdk.user.profile();

        this.setState({
            userName: user.data.nickname,
            userProfilePicture: user.data.profilePicture,
            quizzesCompleted: user.data.quizzesCompleted
        });

        return user;
    }
    render(){
        return (
            <div>
                <NavBar
                    showLoggedInImage = {this.state.displayLoggedInAvatar}
                    loginOrLogout = {this.state.loginOrLogout}
                    loginHref = {this.state.loginHref}
                    userProfileLink = {this.state.userProfileLink}
                />
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
                    quiz = {this.props.quiz} 
                    quizColour = {this.props.headerColour} 
                    quizDescription = {this.state.quizDescription}
                    buttonDisabled = {this.state.buttonDisabled}
                    buttonHidden = {this.state.buttonHidden}
                    buttonCursor = {this.state.buttonCursor}
                />

                <DisplayContent style = {{background: this.props.headerColour, display: this.state.displayLoginMessage}}>
                    <div>
                        <h1> Want to view more content? </h1>
                        <p className = "content-desc"> I'm afraid you'll need to login to view anymore content. Please click on the button below to login or sign up!</p>
                        <button onClick = {this.proceedToLoginPage}><a id = "quiz" href = {this.state.loginUrl} >Login</a></button>
                    </div>
                </DisplayContent>

                <UnlockableContent style = {{display: this.state.displayLoginContent}}>
                    <HideContent style = {{display: this.props.display}}></HideContent>
                    <Resources resources = {this.props.resources}/>
                </UnlockableContent>

                <Navigation {...this.props}/>
            </div>
        )
    }
}

export default Template;