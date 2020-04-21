import React, { useState } from "react";
import { getRandom } from "./helpers";

function EightBall({ answers }) {
  const [shaked, setShaked] = useState(false);
  const [index, setIndex] = useState(0);

  const [colors, setColors] = useState({ red: 0, green: 0, goldenrod: 0 });

  const styleBall = {
    color: "blue",
    backgroundColor: shaked ? answers[index].color : "black",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  };
  return (
    <div style={styleBall}>
      <p>{shaked ? answers[index].msg : "Think of a Question"}</p>
      <p>Red: {colors.red}</p>
      <p>Green: {colors.green}</p>
      <p>Gold: {colors.goldenrod}</p>
      <button
        onClick={() => {
          setShaked(true);
          let i = getRandom(answers.length);
          setIndex(i);
          colors[answers[i].color] += 1;
          setColors(colors);
        }}
      >
        Shake
      </button>

      <button
        onClick={() => {
          setShaked(false);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default EightBall;
