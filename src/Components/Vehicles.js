import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";



function Vehicles(props) {

  
  useEffect(() => {
    // console.log(selectedVehicle)
    
  }, [props.selectedVehicle])
  

  // const handleSelect = (index) => {
  //   console.log(props.Vehicles[index])
  //   props.Vehicles[index].total_no -= 1;
  // };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Select Vehicle
      </FormLabel>
      {console.log(props)}
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
                control={<Radio />}
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
