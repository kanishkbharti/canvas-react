import React from "react";
import jspdf from "jspdf";
import uuid from "react-uuid";
import html2canvas from "html2canvas";

const Download = ({ addRandomColor, id }) => {
  const download = (id) => {
    let canvas = document.getElementById(id);
    html2canvas(canvas).then(function (canvas) {
      let img = canvas.toDataURL("image/png");
      let doc = new jspdf();
      doc.addImage(img, "PNG", 10, 10);

      doc.save(`img${uuid()}.pdf`);
    });
  };

  return (
    <div className="button-container">
      <button className="btn" onClick={() => download(id)}>
        Download Pdf
      </button>
      <button className="btn" onClick={() => addRandomColor()}>
        Add Color
      </button>
    </div>
  );
};

export default Download;
