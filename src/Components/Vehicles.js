import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function Vehicles(props) {

  const handleVehiclesLeft = (index) => {
    // console.log(selectedVehicle);
    const SelectedVehicleName = props.selectedVehicle[index];
    props.Vehicles.map((vehicle) =>
      vehicle.name === SelectedVehicleName ? (vehicle.total_no -= 1) : ""
    );
  };

  useEffect(() => {
    // console.log(selectedVehicle)
    handleVehiclesLeft(props.index)
  }, [props.selectedVehicle]);



  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Select Vehicle
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={props.selectedVehicle[props.index]}
        onChange={(e) => props.triggerSelectVehicleUpdate(e, props.index)}
      >
        {props.Vehicles.map((vehicle, index) => {
          return (
            <>
              <FormControlLabel
                value={vehicle.name}
                control={<Radio disabled = {vehicle.total_no <= 0} />}
                label={vehicle.name + "(" + vehicle.total_no + ")"}
              />
            </>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default Vehicles;
