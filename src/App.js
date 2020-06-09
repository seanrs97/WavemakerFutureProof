import React from 'react';
import './App.css';
import ScrollToTop from "./ScrollToTop.js";

import NavBar from "./Components/NavBar.js";
import Template from "./Components/Template.js";
import Template404 from "./Components/Template404.js";
import Footer from "./Components/Footer.js";
import Home from "./Components/Home.js";

import Coding from "./Components/CoreTopics/Pages/Coding.js";
import Essential from "./Components/CoreTopics/Pages/Essential.js";
import Design from "./Components/CoreTopics/Pages/Design.js";
import DigitalEnt from "./Components/CoreTopics/Pages/DigitalEnt.js";

import {BrowserRouter as Router, Route} from "react-router-dom";
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
    if (params.get("page")===null) {
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
        this.setState({
          display404: "block"
        })
      }
    });
  }
  render(){
    console.log(this.state.jsonData)
    return(
      <div className="App">
        <Router>
          <ScrollToTop>
            <NavBar/>
            <Route exact path = "/coding" component = {Coding}/>
            <Route exact path = "/essentialSkills" component = {Essential}/>
            <Route exact path = "/2dand3ddesign" component = {Design}/> 
            <Route exact path = "/DigitalEntertainment" component = {DigitalEnt}/>

            <Route path = "/" exact render= {() => {
                return (
                  <div>
                    <div style = {{display: this.state.showTemplate}}>
                      <Template {...this.state.jsonData}/>
                    </div>
                    <Template404 display404 = {this.state.display404} />
                  </div>
                )
            }}/>


            <Route exact path = "/home" component = {Home} />
            <Footer/>
          </ScrollToTop>
        </Router>
      </div>
    )
  }
}
export default App;
