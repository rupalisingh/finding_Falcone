import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.js";
import "../css/Destination.css";
import Vehicles from "../Components/Vehicles";
import {
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";

function Destination() {
  const {
    AllPlanets,
    selectedPlanets,
    SetselectedPlanets,
    currentSelectedPlanet,
  } = useContext(AuthContext);

  const OnSelectPlanet = (e, key) => {
    const clonedSelectedPlanets = JSON.parse(JSON.stringify(selectedPlanets));
    clonedSelectedPlanets[key] = e.target.value;
    currentSelectedPlanet.current = e.target.value;
    SetselectedPlanets(clonedSelectedPlanets);
  };

  const OptionsToRender = AllPlanets
    ? AllPlanets.map((planet, index) => {
        if (!selectedPlanets.includes(planet.name)) {
          return (
            <MenuItem key={index} value={planet.name}>
              {planet.name}
            </MenuItem>
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
            <div className="PlanetsAndVehicles" key={index}>
              <Paper elevation={5}>
                <FormControl fullWidth key = {index}>
                  <InputLabel id="demo-simple-select-label">
                    Destination {index + 1}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    key={index}
                    value={selectedPlanets[index]}
                    onChange={(e) => OnSelectPlanet(e, index)}
                  >
                    <MenuItem key={index} value={selectedPlanets[index]}>
                      {selectedPlanets[index]}
                    </MenuItem>
                    {OptionsToRender}
                  </Select>
                  <>
                    {selectedPlanets[index] ? (
                      <>
                        <div className="Distance_measure">
                          Distance - {getDistance(index)}
                        </div>
                        <Vehicles
                          index={index}
                          PlanetDistance={getDistance(index)}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                </FormControl>
              </Paper>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Destination;
