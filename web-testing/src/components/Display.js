import React from "react";

const Display = props => {
  return (
    <div className="display-container">
      <div className="scoreboard">
        <div className="home"></div>
        <div className="away"></div>
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
