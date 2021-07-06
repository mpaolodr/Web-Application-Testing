import React from "react";
import "./App.css";

//components
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

//functions
import { addToBall } from "./utils/helpers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeScore: 0,
      awayScore: 0,
      ball: "",
      foul: 0,
      hit: 0,
      strike: ""
    };
  }

  //add to Ball Value
  setter = obj => {
    this.setState(obj);
  };

  render() {
    return (
      <div className="App">
        <Display display={this.state} />
        <Dashboard state={this.state} setter={this.setter} />
      </div>
    );
  }
}

export default App;
