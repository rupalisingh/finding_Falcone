import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import Navbar from "./Navbar";
import '../css/Result.css'
import { CircularProgress } from "@mui/material";


function Result() {
  const {
    selectedVehicle,
    selectedPlanets,
    Total_time,
    setLoading,
    Loading
  } = useContext(AuthContext);

  const [Result, setResult] = useState([null, null])

  let FinalResult = []

  const getToken = async () => {
    let response = await axios({
      method: "post",
      url: "https://findfalcone.herokuapp.com/token",
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  };

  const FindFalcone = async (token, planets, vehicles) => {
    let response = await axios.post(
      "https://findfalcone.herokuapp.com/find",
      { token: token, planet_names: planets, vehicle_names: vehicles },
      {
        headers: {
          Accept: " application/json ",
          "Content-Type": " application/json ",
        },
      }
    );
    return response;
  };

  useEffect(() => {
    (async () => {
      const token = await getToken();
      const res = await FindFalcone(
        token.token,
        selectedPlanets,
        selectedVehicle
      );
      FinalResult[0] = res.data.status
      FinalResult[1] = res.data.planet_name
      setResult(FinalResult)
      console.log(Result)
      console.log(res.data)
      setLoading(false)
    })();
  }, [Loading]);
  return (
    <>
      <Navbar />
      <div className="Result-body">
        {console.log(Result)}

        {Loading && Result[0] == null && Result[1] == undefined ?  <CircularProgress /> : FinalResult ? (
          <>
            <div>
              {Result[0]}! Congratulations on Finding Falcone. King Shan is
              Mighty Pleased.
            </div>
            <div>
              Time Taken - {Total_time} Found on Planet - {Result[1]}
            </div>
          </>
        ) : (
          <>
            Uhh ooo ! You couldnt find Falcone. King Shan is going to be superr
            pissed!!
          </>
        )}
      </div>
    </>
  );
}

export default Result;
