import React from "react";

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            loggedIn: ""
        }
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(){
        alert("YOU HAVE LOGGED IN!");
        this.setState({
            loggedIn: "loggedIn"
        })
    }

    childFunction(e){
        e.preventDefault();
        this.props.functionCallFromParent("Hello from Child");
        console.log("SOMETHING")
    }
    render(){
        return (
            <div>
                <button onClick = {this.childFunction.bind(this)}> Click </button>
            </div>
        )
    }
}

export default Login;