// importing css styling
import "./HomePage.css";

// import needed button components & React
import React from "react";
import { Button as AntButton } from "antd";
import { useNavigate } from "react-router-dom";
import { Button as RebassButton } from "rebass";
import { Button as MuiButton } from "@mui/material";
import { Button as BootButton } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage() {
  let navigate = useNavigate();

  const toMui = () => {
    navigate("/materialui");
  };
  const toBoot = () => {
    navigate("/reactbootstrap");
  };
  const toRebass = () => {
    navigate("/rebass");
  };
  const toAnt = () => {
    navigate("/antdesign");
  };

  return (
    <div className="homePage">
      <div className="head">
        <h1>ThirteenHelens LLC</h1>
      </div>

      <nav>
        <MuiButton variant="contained" onClick={toMui}>
          MUI
        </MuiButton>
        <BootButton variant="primary" onClick={toBoot}>
          React Bootstrap
        </BootButton>
        <RebassButton
          bg="blue"
          color="white"
          variant="outline"
          onClick={toRebass}
        >
          Rebass
        </RebassButton>
        <AntButton type="primary" onClick={toAnt}>
          Ant Design
        </AntButton>
      </nav>

      <div className="aboutSection">
        <h2>What is ThirteenHelens?</h2>
        <h3>text text text</h3>
        <h2>What is this site?</h2>
        <h3>text text text</h3>

        <div className="resume"></div>
      </div>
    </div>
  );
}
