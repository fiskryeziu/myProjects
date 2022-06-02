import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage(props) {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>
          This is a React app builded from the react course → React Front To
          Back 2022
        </p>
        <p>Version: 1.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
