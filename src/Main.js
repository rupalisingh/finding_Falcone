import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import Destination from "./Components/Destination";
import Navbar from "./Components/Navbar";

function Main() {
  const [Allplanets, SetAllPlanets] = useState([{}]);
  const [AllVehicles, SetAllVehicles] = useState([{}]);

  const getPlanets = async () => {
    let response = await axios.get("https://findfalcone.herokuapp.com/planets");
    return response.data;
  };

  const getVehicles = async () => {
    let response = await axios.get(
      "https://findfalcone.herokuapp.com/vehicles"
    );
    return response.data;
  };

  useEffect(() => {
    (async () => {
      let res_P = await getPlanets();
      let res_V = await getVehicles();
      SetAllPlanets(res_P);
      SetAllVehicles(res_V);
    })();
  }, [SetAllPlanets, SetAllVehicles]);

  return (
    <>
      <Navbar />
      <div className="heading">Finding Falcone</div>
      <div className="subheading">Select Planets you want to Search in!!</div>
      <div className="center-body">
        <div className="Destination-select">
          {Allplanets.length > 1 && AllVehicles.length > 1 ? (
            <Destination planets={Allplanets} vehicles={AllVehicles} />
          ) : (
            <></>
          )}
        </div>
        <div className="time-taken">Time Taken</div>
      </div>
      <Button className="button" variant="contained">Find Falcone!</Button>
    </>
  );
}

export default Main;
