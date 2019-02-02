import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

class App extends Component {
state = {
  "testValue": "Getting....u see it here "
}
componentDidMount(){
  console.log("Mounting App");
  axios.get("/api/test")
   .then(result=>{
    console.log(result.data.test);
    this.setState({"testValue": result.data.test})
  })
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to our final project!</h2>
          <p>bla bla bla bla</p>
        </div>
        <p className="App-intro">
          The test value is::: {this.state.testValue}
        </p>
      </div>
    );
  }
}

export default App;
