import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [AllPlanets, SetAllPlanets] = useState([{}]);
  const [AllVehicles, SetAllVehicles] = useState([{}]);
  const [selectedPlanets, SetselectedPlanets] = useState([
    null,
    null,
    null,
    null,
  ]);

  const [selectedVehicle, setSelectedVehicle] = useState([
    null,
    null,
    null,
    null,
  ]);

  const [VehicleCount, setVehicleCount] = useState([])
  const [timeTaken, settimeTaken] = useState([0,0,0,0])
  const [Total_time, setTotal_time] = useState(0)
  const currentSelectedVehicle = useRef(-1);
  const currentSelectedPlanet = useRef('Select a Destination')



  const getPlanets = async () => {
    let response = await axios.get("https://findfalcone.herokuapp.com/planets");
    return response.data;
  };

  const getVehicles = async () => {
    let response = await axios.get(
      "https://findfalcone.herokuapp.com/vehicles"
    );
    return response.data;
  };

  const GetVehicleCount = (AllVehicles) => {
    const count = AllVehicles.map(vehicle => vehicle.total_no)
    setVehicleCount(count)
  }

  

  useEffect(() => {
    (async () => {
      let res_P = await getPlanets();
      let res_V = await getVehicles();
      SetAllPlanets(res_P);
      SetAllVehicles(res_V);
      GetVehicleCount(res_V)
    })();
  }, []);

  const value = {
    AllPlanets,
    AllVehicles,
    selectedPlanets,
    selectedVehicle,
    VehicleCount,
    currentSelectedVehicle,
    timeTaken,
    Total_time,
    currentSelectedPlanet,
    setVehicleCount,
    SetselectedPlanets,
    setSelectedVehicle,
    settimeTaken,
    setTotal_time,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
