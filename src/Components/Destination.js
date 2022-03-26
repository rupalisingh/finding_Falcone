import React, { useState, useEffect } from "react";
import Vehicles from "./Vehicles";
// import { Card, FormControl, InputLabel } from "@mui/material";
import "../css/Destination.css";

function Destination(props) {

  const [selectedPlanets, SetselectedPlanets] = useState([
    null,
    null,
    null,
    null,
  ]);

  const [selectedVehicle, setSelectedVehicle] = useState([
    null,
    null,
    null,
    null,
  ]);

  const OnSelectVehicle = (e, key) => {
    const clonedSelectedVehicle = JSON.parse(JSON.stringify(selectedVehicle))
    clonedSelectedVehicle[key] = e.target.value
    setSelectedVehicle(clonedSelectedVehicle)
  }


  const OnSelectPlanet = (e, key) => {
    const clonedSelectedPlanets = JSON.parse(JSON.stringify(selectedPlanets));
    clonedSelectedPlanets[key] = e.target.value;
    SetselectedPlanets(clonedSelectedPlanets);
  };

  const CustomSelectComponents = ({ value, options, OnSelect }) => {
    return (
      <select value={value} onChange={OnSelect}>
        <option> -- Select a Planet -- </option>
        {options.map((option) => {
          return (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    );
  };

  const OptionsToRender = (Alloptions, AllselectedOptions, index) => {
    const optionstoRender =
      AllselectedOptions[index] === null
        ? Alloptions.filter(
            (option) =>
              !AllselectedOptions.some(
                (selectedOption) =>
                  option && selectedOption && option.name === selectedOption
              )
          )
        : Alloptions;
    return optionstoRender;
  };

  useEffect(() => {
  }, [selectedPlanets]);

  return (
    <>
      <div className="Parent_Card">
        {selectedPlanets.map((planet, index) => {
          const options = OptionsToRender(
            props.planets,
            selectedPlanets,
            index
          );
          return (
            <>
              <CustomSelectComponents
                value={
                  selectedPlanets[index] != null ? selectedPlanets[index] : ""
                }
                options={options}
                OnSelect={(e) => OnSelectPlanet(e, index)}
                key={index}
              />
              {selectedPlanets[index] != null ? (
                <Vehicles
                  selectedPlanets={selectedPlanets}
                  Vehicles={props.vehicles}
                  Destination={props.planets}
                  selectedVehicle = {selectedVehicle}
                  OnSelectVehicle = {OnSelectVehicle}
                  index={index}
                />
              ) : (
                <></>
              )}
            </>
          );
        })}
      </div>
    </>
  );
}

export default Destination;
