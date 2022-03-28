import React, { useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [Allplanets, SetAllPlanets] = useState([{}]);
  const [AllVehicles, SetAllVehicles] = useState([{}]);

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

  useEffect(() => {
    (async () => {
      let res_P = await getPlanets();
      let res_V = await getVehicles();
      SetAllPlanets(res_P);
      SetAllVehicles(res_V);
      console.log(Allplanets);
    })();
  }, []);

  const value = {
    Allplanets,
    AllVehicles,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
