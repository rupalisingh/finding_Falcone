import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function Vehicles(props) {

  const handleVehicleCount = (selectedVehicle, vehicleCount, AllVehicles) => {
    AllVehicles.map((vehicle, key) =>
      selectedVehicle.includes(vehicle.name)
        ? (vehicleCount[key] -= 1)
        : vehicleCount[key] === vehicle.total_no
    );

    console.log(vehicleCount);
  };

  useEffect(() => {
    // handleVehicleCount(
    //   props.selectedVehicle,
    //   props.vehicleCount,
    //   props.Vehicles
    // );
    // console.log(props.Vehicles.total_no)
  }, [props.selectedVehicle, props.vehicleCount]);

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Select Vehicle
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.selectedVehicle[props.index]}
        onChange={(e) => {props.OnSelectVehicle(e, props.index) ; handleVehicleCount(props.selectedVehicle,
          props.vehicleCount,
          props.Vehicles)}}
      >
        {props.Vehicles.map((vehicle, index) => {
          return (
            <>
              <FormControlLabel
                value={vehicle.name}
                control={
                  <Radio disabled={props.vehicleCount[index] <= 0 ? true : false} />
                }
                label={vehicle.name + "(" + props.vehicleCount[index] + ")"}
              />
            </>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default Vehicles;
