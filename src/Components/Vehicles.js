import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function Vehicles(props) {
  const [selectedVehicle, SetselectedVehicle] = useState();

  const handleChange = (e) => {
    SetselectedVehicle(e.target.vehicle);
  };
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Select Vehicle
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedVehicle}
        onChange={handleChange}
      >
        {props.Vehicles.map((vehicle) => {
          return (
            <>
            {console.log(vehicle)}
              <FormControlLabel value={vehicle.name} control={<Radio />} label = {vehicle.name}/>
            </>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default Vehicles;
