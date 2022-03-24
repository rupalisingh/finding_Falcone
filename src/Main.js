import React, { useEffect, useState } from "react";
import axios from "axios";
import Destination from "./Components/Destination";

// const Allplanets = [
//   {
//     name: "john",
//     distance: 1
//   },
//   {
//     label: "joe",
//     value: 2
//   },
//   {
//     label: "joel",
//     value: 3
//   },
//   {
//     label: "jackie",
//     value: 4
//   }
// ];

function Main() {
  const [Allplanets, SetAllPlanets] = useState([{}]);
  const [AllVehicles, SetAllVehicles] = useState([{}])

  const getPlanets = async () => {
    let response = await axios.get("https://findfalcone.herokuapp.com/planets");
    return response.data
  };

  const getVehicles = async() => {
    let response = await axios.get("https://findfalcone.herokuapp.com/vehicles")
    return response.data
  }

  useEffect(() => {
    (async () => {
      let res_P = await getPlanets();
      let res_V = await getVehicles();
      SetAllPlanets(res_P)
      SetAllVehicles(res_V)
    })();
  },[SetAllPlanets, SetAllVehicles]);

  return (
    <>
      <div>Finding Falcone</div>
      {
        Allplanets.length > 1 && AllVehicles.length > 1 ? <Destination planets={Allplanets} vehicles = {AllVehicles} /> : <></>

      }
    </>
  );
}

export default Main;
