import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.js";
import "../css/Destination.css";
import Vehicles from "../Components/Vehicles"
import Paper from "@mui/material/Paper";


function Destination() {
  const { AllPlanets, selectedPlanets, SetselectedPlanets } =
    useContext(AuthContext);

  const OnSelectPlanet = (e, key) => {
    const clonedSelectedPlanets = JSON.parse(JSON.stringify(selectedPlanets));
    clonedSelectedPlanets[key] = e.target.value;
    SetselectedPlanets(clonedSelectedPlanets);
  };

  const OptionsToRender = AllPlanets
    ? AllPlanets.map((planet, index) => {
        if (!selectedPlanets.includes(planet.name)) {
          return (
            <option value={planet.name}>
              {planet.name}{" "}
            </option>
          );
        }
      })
    : null;

  const getDistance = (index) => {
    const choosenPlanet = AllPlanets.filter(
      (planet) => planet.name === selectedPlanets[index]
    );
    return choosenPlanet[0].distance;
  };

  return (
    <>
      <div className="Parent_Card">
        {selectedPlanets.map((planet, index) => {
          return (
            <div className="PlanetsAndVehicles">
            <Paper elevation={5}>
              <div >
                <select
                  key={index}
                  value={selectedPlanets[index]}
                  onChange={(e) => OnSelectPlanet(e, index)}
                >
                  <option value = "-1">-- Select Planet --</option>
                  {OptionsToRender}
                </select>
                <>
                  {selectedPlanets[index] ? (
                    <>
                    <div className="Distance_measure">Distance - {getDistance(index)}</div>
                    <Vehicles index = {index} PlanetDistance = {getDistance(index)}/>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              </div>
            </Paper>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Destination;
