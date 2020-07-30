import React from "react";
import Header from "./Templates/Header.js";
import Resources from "./Templates/Resources.js";
// import Banner from "./Templates/Banner.js";
import Quiz from "./Quiz.js";

import What from "./Templates/What.js";
import Why from "./Templates/Why.js";
import How from "./Templates/How.js";
import Navigation from "./Templates/Navigation.js";

import sal from "sal.js";
import '../../node_modules/sal.js/dist/sal.css';
import styled from "styled-components";

import NavBar from "./NavBar";

import userLoggedOut from "../Images/userLoggedOut.svg";
import userLoggedIn from "../Images/userLoggedIn.svg";

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
    }
    async componentDidMount(){

        // SDK Login method
        this.checkIfUserIsLoggedIn();



        let baseURL = 'https://seanrs97.github.io/jsonData/userProfile.json';
        this.setState({
            quizId: this.props.quiz,
        });

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
        try {
            const sdk = window.futureproofSdk();
            const userIsLoggedIn = await sdk.auth.session(); 

            this.setState({
                displayLoginMessage: "none",
                displayLoginContent: "block",

                displayLoggedInAvatar: `${userLoggedIn}`,
                loginOrLogout: "Logout",
                loginHref: "https://wm-educational-pwa-dev.web.app/",
                userProfileLink: "https://wm-educational-pwa-dev.web.app/profile/",
                buttonDisabled: false,
                buttonHidden: "1",
                buttonCursor: "pointer"
            });

            // Need to check if quiz has bee completed here
            this.setState({
                quizDescription: "You haven't completed the quiz yet! simply click the start button to start playing, good luck!"
            })

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
const UnlockableContent = styled.div`
    position: relative;
`
const HideContent = styled.div`
    height: 100%;
    width: 100%;
    background: grey;
    opacity: 0.98;
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;

    display: none;
`
const DisplayContent = styled.div`
    margin-bottom: 40px;
    padding: 40px 0;
    div{
        width: 90%;
        @media only screen and (min-width: 1280px) and (max-width: 2000px){
            width: 78%;
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
        }
        margin: 0 auto;
        h1{
            color: white;
            line-height: 1.2em;
            padding-bottom: 60px;
            font-size: 5em;
            @media only screen and (min-width: 2000px){
                font-size: 8em;
            }
            @media only screen and (max-width: 600px){
                font-size: 3.6em;
            }
        }
        .content-desc{
            color: white;
            padding-bottom: 40px;
            @media only screen and (min-width: 1650px) and (max-width: 2000px){
                font-size: 1.6em;
            }
            @media only screen and (min-width: 2000px){
                font-size: 2em;
            }
        }
        button{
            margin: 0 auto;
            display: block;
            margin-top: 100px;
            border: none;
            background: white;
            font-size: 2.6em;
            border-radius: 10px;
            padding: 26px 100px;
            cursor: pointer;
            font-family: Dosis;
            font-weight: 900;
            letter-spacing: 0.05em;
            color: #595858;
            a{
                text-decoration: none;
            }
            @media only screen and (min-width: 2000px){
                font-size: 4em !important;
            }
            @media only screen and (max-width: 600px){
                font-size: 1.8em;
            }
        }
    }
`

export default Template;