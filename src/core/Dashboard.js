import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Link className="link" to="/simple">Simple Canvas</Link>
      <Link className="link" to="/draw">Draw Canvas</Link>
    </div>
  );
};

export default Dashboard;
