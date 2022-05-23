import './NavBar.css'
import React from "react";
import { Button as AntButton } from "antd";
import { useNavigate } from "react-router-dom";
import { Button as RebassButton } from "rebass";
import { Button as MuiButton } from "@mui/material";
import { Button as BootButton } from "react-bootstrap";
import { PrimaryButton } from "@fluentui/react/lib/Button";

export default function NavBar() {
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
    const toFluent = () => {
      navigate("/fluentuipage");
    };
  return (
    <nav>
      <MuiButton variant="contained" onClick={toMui}>
        MUI
      </MuiButton>{" "}
      |
      <BootButton variant="primary" onClick={toBoot}>
        React Bootstrap
      </BootButton>{" "}
      |
      <RebassButton
        bg="blue"
        color="white"
        variant="primary"
        onClick={toRebass}
      >
        Rebass
      </RebassButton>{" "}
      |
      <AntButton type="primary" onClick={toAnt}>
        Ant Design
      </AntButton>{" "}
      |<PrimaryButton onClick={toFluent}>Fluent UI</PrimaryButton>
    </nav>
  );
}
