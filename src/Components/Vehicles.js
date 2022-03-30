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

  const calculateVehicleLeft = (
    AllVehicles,
    vehicleId,
    setVehicleCount,
    VehicleCount,
    selectedVehicle
  ) => {
    if (selectedVehicle[props.index] == null) {
      return VehicleCount[vehicleId];
    } else {
      const clonedVehiclecount = JSON.parse(JSON.stringify(VehicleCount));
      console.log(currentSelectedVehicle.current, previousSelectedVehicle);
      const getcurrentindex = AllVehicles.findIndex(
        (vehicle) => vehicle.name === currentSelectedVehicle.current
      );
      const getPreviousIndex = AllVehicles.findIndex(
        (vehicle) => vehicle.name === previousSelectedVehicle.current
      );
      getcurrentindex !== -1 ? (
        (clonedVehiclecount[getcurrentindex] -= 1)
      ) : (
        <></>
      );

      getPreviousIndex !== -1 && getPreviousIndex != null ? (
        (clonedVehiclecount[getPreviousIndex] += 1)
      ) : (
        <></>
      );
      setVehicleCount(clonedVehiclecount);
      return VehicleCount[vehicleId];
    }
  };

  const OnSelectVehicle = (e, index) => {
    const clonedSelectedVehicle = JSON.parse(JSON.stringify(selectedVehicle));
    previousSelectedVehicle.current = clonedSelectedVehicle[index];
    clonedSelectedVehicle[index] = e.target.value;
    currentSelectedVehicle.current = e.target.value;
    console.log(previousSelectedVehicle, currentSelectedVehicle);
    setSelectedVehicle(clonedSelectedVehicle);
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
                  label={
                    vehicle.name +
                    "(" +
                    calculateVehicleLeft(
                      AllVehicles,
                      id,
                      setVehicleCount,
                      VehicleCount,
                      selectedVehicle
                    ) +
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
