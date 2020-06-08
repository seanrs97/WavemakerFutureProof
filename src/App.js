import React from 'react';
import './App.css';

import NavBar from "./Components/NavBar.js";
import Template from "./Components/Template.js";
import Template404 from "./Components/Template404.js";
import Footer from "./Components/Footer.js";

import {BrowserRouter as Router} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHourglass} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitter} from '@fortawesome/free-brands-svg-icons'

library.add(faHourglass, faFacebookSquare, faInstagramSquare, faTwitter);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      jsonData: [],
      display404: "none",
      showHome: "none",
      showTemplate: ""
    }
  }
  async componentDidMount(){
    let baseURL = 'https://seanrs97.github.io/jsonData/';
    let params = (new URL(document.location)).searchParams;
    let myURL;
    console.log(params.get("page"));
    if (params.get("page")===null) {
      // myURL = `${baseURL}404.json`;
      this.setState({
        showHome: "block",
        showTemplate: "none"
      });
    } else {
      myURL = `${baseURL}${params.get("page")}.json`;
      this.setState({
        showHome: "none",
        showTemplate: "block"
      })
    }

    if(params.get("page") !== null){
      myURL = `${baseURL}${params.get("page")}.json`;
      this.setState({
        showHome: "none",
        showTemplate: "block"
      })
    }
    console.log("CURRENT URL", myURL)
    const self = this;
    fetch(myURL).then(response => {
      if(response.ok){
        response.json().then(data => {
          self.setState({
            jsonData: data[0]
          })
        });
        this.setState({
          display404: "none"
        })
      } else {
        console.log("error fetching file");
        console.log(this.state.jsonData);
        this.setState({
          display404: "block"
        })
      }
    });
  }
  render(){
    console.log(this.state);
    return(
      <div className="App">
        <Router>
          <NavBar/>
          {/* <div style = {{display: this.state.showHome}}>
            <Home/>
          </div> */}
          <div style = {{display: this.state.showTemplate}}>
            <Template {...this.state.jsonData}/>
          </div>
          <Template404 display404 = {this.state.display404} />
          <Footer/>
        </Router>
      </div>
    )
  }
}
export default App;
