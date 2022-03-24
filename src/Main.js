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

  const getPlanets = async () => {
    let response = await axios.get("https://findfalcone.herokuapp.com/planets");
    return response.data
  };

  useEffect(() => {
    (async () => {
      let res = await getPlanets();
      SetAllPlanets(res)
    })();
  },[SetAllPlanets]);

  return (
    <>
      <div>Finding Falcone</div>
      {
        Allplanets.length > 1 ? <Destination planets={Allplanets} /> : <></>

      }
    </>
  );
}

export default Main;
