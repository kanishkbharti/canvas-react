import React, { useEffect, useState } from "react";
import ColorContainer from "../containers/ColorContainer";
import Download from "../containers/Download";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Draw = (props) => {
  const {
    colors,
    bgcolor,
    addRandomColor,
    removeColor,
    handleBackground
  } = props;
  const [paint, setPaint] = useState(false);

  const handleDown = (e) => {
    setPaint(true);
    draw(e);
  };

  const handleUp = () => {
    setPaint(false);
    let canvas = document.getElementById("canvasDraw");
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
  };

  const draw = (e) => {
    let canvas = document.getElementById("canvasDraw");
    let ctx = canvas.getContext("2d");

    if (!paint) return;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = bgcolor;

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  };
  return (
    <>
      <Link to="/"><ArrowBackIcon /></Link>
      <ColorContainer
        colors={colors}
        handleBackground={handleBackground}
        removeColor={removeColor}
      />
      <div className="draw-container">
        <canvas
          id="canvasDraw"
          onMouseUp={handleUp}
          onMouseDown={(e) => handleDown(e)}
          onMouseMove={(e) => draw(e)}
        />
      </div>

      <Download addRandomColor={addRandomColor} id="canvasDraw" />
    </>
  );
};

export default Draw;
