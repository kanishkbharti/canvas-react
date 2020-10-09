import React from "react";
import ColorContainer from "../containers/ColorContainer";
import Download from "../containers/Download";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from "react-router-dom";

export default function Canvas(props) {
  const {
    colors,
    bgcolor,
    addRandomColor,
    removeColor,
    handleBackground
  } = props;

  return (
    <>
      <Link to="/"><ArrowBackIcon /></Link>
      <div className="container">

        <ColorContainer
          colors={colors}
          handleBackground={handleBackground}
          removeColor={removeColor}
        />
        <div className="canvas-container">
          <canvas
            style={{ background: `${bgcolor}` }}
            id="canvas"
            width="450"
            height="450"
          />
        </div>
        <Download addRandomColor={addRandomColor} id={"canvas"} />
      </div>
    </>
  );
}
