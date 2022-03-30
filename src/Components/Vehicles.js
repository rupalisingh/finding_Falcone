import React, { useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthProvider.js";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function Vehicles(props) {
  const {
    AllVehicles,
    selectedVehicle,
    setSelectedVehicle,
    VehicleCount,
    setVehicleCount,
  } = useContext(AuthContext);

  const currentSelectedVehicle = useRef(-1);
  const previousSelectedVehicle = useRef(-1);

  const calculateVehicleLeft = () => {
    const clonedVehicleCount = JSON.parse(JSON.stringify(VehicleCount));
    const originalCount = AllVehicles.map(vehicle => vehicle.total_no)
    const getCurrentIndex = AllVehicles.findIndex(
      (vehicle) => vehicle.name === currentSelectedVehicle.current
    );
    const getPreviousIndex = AllVehicles.findIndex(vehicle => vehicle.name === previousSelectedVehicle.current)
    clonedVehicleCount[getCurrentIndex] > 0 ? clonedVehicleCount[getCurrentIndex] -= 1 : <></>
    clonedVehicleCount[getPreviousIndex] < originalCount[getPreviousIndex] ? clonedVehicleCount[getPreviousIndex] += 1 : <></>
    setVehicleCount(clonedVehicleCount)
    console.log(VehicleCount)
    return VehicleCount
  };

  const OnSelectVehicle = (e, index) => {
    const clonedSelectedVehicle = JSON.parse(JSON.stringify(selectedVehicle));
    previousSelectedVehicle.current = clonedSelectedVehicle[index];
    clonedSelectedVehicle[index] = e.target.value;
    currentSelectedVehicle.current = e.target.value;
    setSelectedVehicle(clonedSelectedVehicle);
    calculateVehicleLeft()
  };

  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Select Vehicle
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={(e) => OnSelectVehicle(e, props.index)}
        >
          {AllVehicles.map((vehicle, id) => {
            return (
              <>
                <FormControlLabel
                  value={vehicle.name}
                  control={<Radio />}
                  label={vehicle.name + "(" + VehicleCount[id] + ")"}
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
