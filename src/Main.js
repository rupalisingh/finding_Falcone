import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Destination from "./Components/Destination";
import Navbar from "./Components/Navbar";
import TimeTaken from "./Components/TimeTaken";
import { AuthContext } from "../src/Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import "./Main.css"
import "./css/Destination.css"

function Main() {
  const { AllPlanets, AllVehicles, Total_time } = useContext(AuthContext);
  const navigate = useNavigate();
  const OnSubmit = (e) => {
    e.preventDefault();
    navigate("/Result");
  };
  return (
    <>
      <Navbar />
      <div className="heading">Finding Falcone</div>
      <div className="subheading">Select Planets you want to Search in!!</div>

      <div className="center-body">
        <div className="Destination-select">
          {AllPlanets && AllVehicles ? <Destination /> : <></>}
        </div>
        <Paper elevation={5}>
          <div className="time-taken"><TimeTaken/></div>
        </Paper>
      </div>
      <div className="submit-button">
        <Button className="button" variant="contained" onClick={OnSubmit}>
          Find Falcone!
        </Button>
      </div>
    </>
  );
}

export default Main;
