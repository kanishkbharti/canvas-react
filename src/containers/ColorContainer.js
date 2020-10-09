import React from "react";

const ColorContainer = ({ colors, handleBackground, removeColor }) => {
  return (
    <div className="color-container">
      {colors.map((color, i) => {
        return (
          <button
            key={i}
            className="color-btn"
            style={{ background: `${color}` }}
            onClick={() => handleBackground(`${color}`)}
            onDoubleClick={() => removeColor(`${color}`)}
          ></button>
        );
      })}
    </div>
  );
};

export default ColorContainer;
