import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";



function Vehicles(props) {

  const [selectedVehicle, SetselectedVehicle] = useState([
    null,
    null,
    null,
    null,
  ]);

  const handleChange =  (e, index) => {
    const clonedSelectedVehicle = JSON.parse(JSON.stringify(selectedVehicle));
    clonedSelectedVehicle[index] = e.target.value;
    SetselectedVehicle(clonedSelectedVehicle);
  };
  
  useEffect(() => {
    console.log(selectedVehicle)
    
  }, [selectedVehicle])
  

  // const handleSelect = (index) => {
  //   console.log(props.Vehicles[index])
  //   props.Vehicles[index].total_no -= 1;
  // };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Select Vehicle
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={selectedVehicle[props.index]}
        onChange={(e) => handleChange(e, props.index)}
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
