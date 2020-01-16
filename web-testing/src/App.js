import React from "react";
import "./App.css";

//components
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

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

  //add score function
  addBall = () => {
    if (this.state.strike === "xxx" || this.state.ball === "⚾⚾⚾") {
      return this.setState({
        ball: "",
        strike: ""
      });
    } else {
      return this.setState({
        ball: this.state.ball + "⚾"
      });
    }
  };

  //strike
  addStrike = () => {
    if (this.state.strike === "xx" || this.state.ball === "⚾⚾⚾⚾") {
      return this.setState({
        strike: "",
        ball: ""
      });
    } else {
      return this.setState({
        strike: this.state.strike + "x"
      });
    }
  };

  //hit recorded
  hit = () => {
    this.setState({
      ball: "",
      strike: ""
    });
  };

  //foul
  foul = () => {
    if (this.state.strike === "xx") {
      return;
    } else {
      this.setState({
        strike: this.state.strike + "x"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Display display={this.state} />
        <Dashboard
          addBall={this.addBall}
          hit={this.hit}
          addStrike={this.addStrike}
          foul={this.foul}
        />
      </div>
    );
  }
}

export default App;
