import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.js";
import "../css/Destination.css";
import Vehicles from "../Components/Vehicles"

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
            <>
              <div className="PlanetsAndVehicles">
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
                    <div>Distance - {getDistance(index)}</div>
                    <Vehicles index = {index}/>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Destination;
