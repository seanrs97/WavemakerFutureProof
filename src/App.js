import React from 'react';
import './App.css';
import ScrollToTop from "./ScrollToTop.js";

import NavBar from "./Components/NavBar.js";
import Template from "./Components/Template.js";
import NavTemplate from "./Components/NavTemplate.js";
import Template404 from "./Components/Template404.js";
import Footer from "./Components/Footer.js";

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
      navData: [],
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



    let navURL = 'https://seanrs97.github.io/navData/';
    let navParams = (new URL(document.location)).searchParams;
    let myNavURL;
    if (params.get("navPage")===null) {
      this.setState({
        showHome: "block",
        showNavTemplate: "none"
      });
    } else {
      myNavURL = `${navURL}${navParams.get("navPage")}.json`;
      this.setState({
        showHome: "none",
        showNavTemplate: "block"
      })
    }

    if(navParams.get("navPage") !== null){
      myNavURL = `${navURL}${navParams.get("navPage")}.json`;
      this.setState({
        showHome: "none",
        showNavTemplate: "block"
      })
    }
    const navSelf = this;
    fetch(myNavURL).then(response => {
      if(response.ok){
        response.json().then(data => {
          console.log("DATA", data)
          navSelf.setState({
            navData: data
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
    return(
      <div className="App">
        <Router>
          <ScrollToTop>
            <NavBar/>
              <div>
                <div style = {{display: this.state.showTemplate}}>
                  <Template {...this.state.jsonData}/>
                </div>
                <Template404 display404 = {this.state.display404} />
              </div>
              <div>
                <div>
                  <NavTemplate {...this.state.navData}/>
                </div>
                <Template404 display404 = {this.state.display404} />
              </div>
            <Footer/>
          </ScrollToTop>
        </Router>
      </div>
    )
  }
}
export default App;
