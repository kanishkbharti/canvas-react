import React, { useState } from "react";
import Canvas from "./components/Canvas";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./core/Dashboard";

import "./styles.css";
import Draw from "./components/Draw";

export default function Home() {
  const [colors, setColors] = useState(["red", "green", "yellow"]);
  const [bgcolor, setBgcolor] = useState("");

  const handleBackground = (color) => {
    setBgcolor(color);
  };
  const addRandomColor = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const z = Math.floor(Math.random() * 10);

    const color = `#${x}${y}${z}`;
    console.log(color);

    setColors([...colors, color]);
  };

  const removeColor = (color) => {
    setColors(colors.filter((c) => c !== color));
    setBgcolor("");
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route
          path="/simple"
          exact
          render={(props) => (
            <Canvas
              {...props}
              bgcolor={bgcolor}
              colors={colors}
              removeColor={removeColor}
              addRandomColor={addRandomColor}
              handleBackground={handleBackground}
            />
          )}
        />
        <Route
          path="/draw"
          exact
          render={(props) => (
            <Draw
              {...props}
              bgcolor={bgcolor}
              colors={colors}
              removeColor={removeColor}
              addRandomColor={addRandomColor}
              handleBackground={handleBackground}
            />
          )}
        />
      </Switch>
    </div>
  );
}
