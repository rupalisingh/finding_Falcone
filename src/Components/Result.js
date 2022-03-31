import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";

function Result() {
  const { selectedVehicle, selectedPlanets } =
    useContext(AuthContext);

  const getToken = async () => {
    let response = await axios({
      method: "post",
      url: "https://findfalcone.herokuapp.com/token",
      headers: {
        'Accept': "application/json",
      },
    });
    return response.data;
  };


  const FindFalcone = async (token, planets, vehicles) => {
     let response = await axios({
      method: "post",
      url: "https://findfalcone.herokuapp.com/find",
      body: {
        "token": token,
        "planet_names": planets,
        "vehicle_names": vehicles,
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    return response
    
  };

  useEffect(() => {
     (async() => {
         const token = await getToken();
         const planets = JSON.stringify(selectedPlanets)
         const vehicles = JSON.stringify(selectedVehicle)
         const res = await FindFalcone(token.token, planets, vehicles)
         console.log(res)

     })()
  });
  return <div>Result</div>;
}

export default Result;
