import React from "react";

//helper
import { ballValue, strikeValue, hitBtn, foulBtn } from "../utils/helpers";
const Dashboard = props => {
  return (
    <div className="btn-container">
      <button
        onClick={() =>
          props.setter(ballValue(props.state.strike, props.state.ball))
        }
        data-testid="ball-btn"
      >
        Ball
      </button>
      <button onClick={() => props.setter(foulBtn(props.state.strike))}>
        Foul
      </button>
      <button onClick={() => props.setter(hitBtn())}>Hit</button>
      <button
        onClick={() =>
          props.setter(strikeValue(props.state.strike, props.state.ball))
        }
        data-testid="strike-btn"
      >
        Strike
      </button>
    </div>
  );
};

export default Dashboard;
