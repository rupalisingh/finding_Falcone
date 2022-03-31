import React, { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthProvider.js";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import "../css/Vehicle.css"
import "../css/Destination.css"

function Vehicles(props) {
  const {
    AllVehicles,
    AllPlanets,
    selectedVehicle,
    setSelectedVehicle,
    VehicleCount,
    setVehicleCount,
    currentSelectedVehicle,
    selectedPlanets,
    settimeTaken,
    timeTaken,
    setTotal_time
  } = useContext(AuthContext);

  // const currentSelectedVehicle = useRef(-1);
  const previousSelectedVehicle = useRef(-1);

  const calculateVehicleLeft = () => {
    const clonedVehicleCount = JSON.parse(JSON.stringify(VehicleCount));
    const originalCount = AllVehicles.map((vehicle) => vehicle.total_no);
    const getCurrentIndex = AllVehicles.findIndex(
      (vehicle) => vehicle.name === currentSelectedVehicle.current
    );
    const getPreviousIndex = AllVehicles.findIndex(
      (vehicle) => vehicle.name === previousSelectedVehicle.current
    );
    clonedVehicleCount[getCurrentIndex] > 0 ? (
      (clonedVehicleCount[getCurrentIndex] -= 1)
    ) : (
      <></>
    );
    clonedVehicleCount[getPreviousIndex] < originalCount[getPreviousIndex] ? (
      (clonedVehicleCount[getPreviousIndex] += 1)
    ) : (
      <></>
    );
    setVehicleCount(clonedVehicleCount);
    console.log(VehicleCount);
    return VehicleCount;
  };

  const OnSelectVehicle = (e, index) => {
    const clonedSelectedVehicle = JSON.parse(JSON.stringify(selectedVehicle));
    previousSelectedVehicle.current = clonedSelectedVehicle[index];
    clonedSelectedVehicle[index] = e.target.value;
    currentSelectedVehicle.current = e.target.value;
    setSelectedVehicle(clonedSelectedVehicle);
    calculateVehicleLeft();
    calculateTime(index, clonedSelectedVehicle);
  };

  const evaluateDisability = (name) => {
    if (selectedVehicle[props.index] === null) {
      return true;
    } else {
      return !selectedVehicle[props.index].includes(name);
    }
  };

  const calculateTime = (index, clonedSelectedVehicle) => {
    // console.log(clonedSelectedVehicle)
    // console.log(selectedPlanets)
    const getSpeed = AllVehicles.filter(vehicle => clonedSelectedVehicle[index] === vehicle.name)[0].speed
    const getDistance = AllPlanets.filter(planet => selectedPlanets[index] === planet.name)[0].distance
    const clonedTimeValues = JSON.parse(JSON.stringify(timeTaken))
    const time = getDistance / getSpeed
    clonedTimeValues[index] = time
    const total_time = clonedTimeValues.reduce((prev, curr) => prev + curr)
    settimeTaken(clonedTimeValues);
    setTotal_time(total_time)
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={(e) => OnSelectVehicle(e, props.index)}
        >
          {AllVehicles.map((vehicle, id) => {
            let disabled = false;
            currentSelectedVehicle.current = "";
            if (
              (vehicle.max_distance < props.PlanetDistance ||
                VehicleCount[id] === 0) &&
              evaluateDisability(vehicle.name)
            ) {
              disabled = true;
            }
            return (
              <>
                <FormControlLabel
                  value={vehicle.name}
                  control={<Radio disabled={disabled} />}
                  label={
                    vehicle.name +
                    "(" +
                    VehicleCount[id] +
                    "/" +
                    vehicle.total_no +
                    ")"
                  }
                />
              </>
            );
          })}
        </RadioGroup>
      </FormControl>
    </>
  );
}

export default Vehicles;
