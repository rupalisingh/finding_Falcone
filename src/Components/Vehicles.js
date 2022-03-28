import React, { useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.js";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function Vehicles(props) {
  const { AllVehicles, selectedVehicle, setSelectedVehicle } =
    useContext(AuthContext);

    const calculateVehicleLeft = (AllVehicles, selectedVehicle, prevSelectedVehicle) => {
      
     
    }

    const OnSelectVehicle = (e, index) => {
      const clonedSelectedVehicle = JSON.parse(JSON.stringify(selectedVehicle));
    clonedSelectedVehicle[index] = e.target.value;
    setSelectedVehicle(clonedSelectedVehicle);
    }

  return (
    <>
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Select Vehicle
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange = {e => OnSelectVehicle(e,props.index )}
        >
          {AllVehicles.map((vehicle) => {
            return (
              <>
                <FormControlLabel
                  value={vehicle.name}
                  control={<Radio />}
                  label={vehicle.name}
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
