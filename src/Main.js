import React, { useEffect, useState, useContext } from "react";
import Button from '@mui/material/Button';
import Destination from "./Components/Destination";
import Navbar from "./Components/Navbar";
import {AuthContext} from "../src/Context/AuthProvider"

function Main() {
const {AllPlanets, AllVehicles} = useContext(AuthContext)
console.log(AllPlanets, AllVehicles)
return (
  <>
      <Navbar />
      <div className="heading">Finding Falcone</div>
      <div className="subheading">Select Planets you want to Search in!!</div>
      <div className="center-body">
        <div className="Destination-select">
          {AllPlanets && AllVehicles? (
            <Destination/>
          ) : (
            <></>
          )}
        </div>
        <div className="time-taken">Time Taken</div>
      </div>
      <div className="submit-button">

      <Button className="button" variant="contained">Find Falcone!</Button>
      </div>
    </>
  );
}

export default Main;
