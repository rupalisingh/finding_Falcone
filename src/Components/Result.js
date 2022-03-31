import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import axios from "axios";
import Navbar from "./Navbar";
import "../css/Result.css";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Result() {
  const { selectedVehicle, selectedPlanets, Total_time, setLoading, Loading } =
    useContext(AuthContext);

  const [Result, setResult] = useState([null, null]);
  let FinalResult = [];

  const navigate = useNavigate();

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

  const GoHome = (e) => {
    e.preventDefault();
    navigate("/");
    window.location.reload()
  };

  useEffect(() => {
    (async () => {
      const token = await getToken();
      const res = await FindFalcone(
        token.token,
        selectedPlanets,
        selectedVehicle
      );
      FinalResult[0] = res.data.status;
      FinalResult[1] = res.data.planet_name;
      setResult(FinalResult);
      console.log(Result);
      console.log(res.data);
      setLoading(false);
    })();
  }, [Loading]);
  return (
    <>
      <Navbar />
      <div className="Result-body">
        {console.log(Result)}

        {Loading && Result[0] == null && Result[1] === undefined ? (
          <CircularProgress />
        ) : FinalResult ? (
          <>
            <div className="result-partone">
              {Result[0]}! Congratulations on Finding Falcone. King Shan is
              Mighty Pleased.
            </div>
            <div className="result-parttwo">
              <div>Time Taken - {Total_time}</div>
              <div>Found on Planet - {Result[1]}</div>
            </div>
          </>
        ) : (
          <>
            <div>
              Uhh ooo ! You couldnt find Falcone. King Shan is going to be
              superr pissed!!
            </div>
          </>
        )}
        <Button variant="contained" onClick={GoHome}>
          Play Again
        </Button>
      </div>
    </>
  );
}

export default Result;
