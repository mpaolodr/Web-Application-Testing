import React from "react";

const Dashboard = props => {
  return (
    <div className="btn-container">
      <button onClick={props.addBall} data-testid="ball-btn">
        Ball
      </button>
      <button onClick={props.foul}>Foul</button>
      <button onClick={props.hit}>Hit</button>
      <button onClick={props.addStrike}>Strike</button>
    </div>
  );
};

export default Dashboard;
