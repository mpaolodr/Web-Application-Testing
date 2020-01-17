import React from "react";

const Display = props => {
  return (
    <div className="display-container">
      <div className="scoreboard">
        <div className="home">
          <h2 className="team-name">Home</h2>
          <div className="home-score">
            <h1>{props.display.homeScore}</h1>
          </div>
        </div>

        <div className="away">
          <h2 className="team-name">Away</h2>
          <div className="away-score">
            <h1>{props.display.awayScore}</h1>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-container">
          <div className="ball">
            <h2 className="count" data-testid="ball-count">
              {props.display.ball}
            </h2>
          </div>
          <h2 className="info-name" data-testid="label-ball">
            BALL
          </h2>
        </div>

        <div className="info-container">
          <div className="strike">
            <h2 className="count" data-testid="strike-count">
              {props.display.strike}
            </h2>
          </div>
          <h2 className="info-name" data-testid="label-strike">
            STRIKE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Display;
