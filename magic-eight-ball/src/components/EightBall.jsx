// EightBall.jsx
import React, { useState } from "react";
import "./EightBall.css";

function EightBall({ answers }) {
  const [currentMsg, setCurrentMsg] = useState("Think of a Question");
  const [currentColor, setCurrentColor] = useState("black");

  function handleClick() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setCurrentMsg(msg);
    setCurrentColor(color);
  }

  return (
    <div
      className="EightBall"
      onClick={handleClick}
      style={{
        backgroundColor: currentColor,
        color: "white",
        borderRadius: "50%",
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "1.5em",
        cursor: "pointer",
      }}
    >
      {currentMsg}
    </div>
  );
}

export default EightBall;
