import React, {useState, useEffect} from 'react';
import './App.css';
import Template from "./Components/Template.js";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      jsonData: []
    }
  }
  async componentDidMount(){
    let baseURL = 'https://seanrs97.github.io/jsonData/';
    let params = (new URL(document.location)).searchParams;
    let myURL;
    console.log(params.get("page"));
    if (params.get("page")===null) {
      myURL = `${baseURL}404.json`;
    } else {
      myURL = `${baseURL}${params.get("page")}.json`;
    }
    const self = this;
    fetch(myURL).then(response => {
      if(response.ok){
        response.json().then(data => {
          self.setState({
            jsonData: data[0]
          })
        })
      } else {
        console.log("error fetching file");
        console.log(this.state.jsonData)
      }
    });
  }
  render(){
    console.log(this.state);
    return(
      <div className="App">
        <Template {...this.state.jsonData}/>
      </div>
    )
  }
}
export default App;
