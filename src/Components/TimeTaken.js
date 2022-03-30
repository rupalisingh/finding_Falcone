import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.js";

function TimeTaken() {
  const {
    AllPlanets,
    AllVehicles,
    selectedPlanets,
    selectedVehicle,
    VehicleCount,
    currentSelectedVehicle,
    timeTaken,
    setVehicleCount,
    SetselectedPlanets,
    setSelectedVehicle,
    settimeTaken,
  } = useContext(AuthContext);


  

  return <div>TimeTaken</div>;
}

export default TimeTaken;
