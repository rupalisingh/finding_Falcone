import React, { useState, useEffect } from "react";
import axios from "axios";
import Destination from "../src/Components/Destination";
import "./Main.css";

function Main() {
  const [error, setError] = useState();
  const [destination, setDestination] = useState([{}]);
  const [vehicles, setVehicles] = useState([{}]);
  const [selectedDestinations, setSelectedDestinations] = useState([{}]);
  let destination_count = [
    "Destination 1",
    "Destination 2",
    "Destination 3",
    "Destination 4",
  ];

  const getAllVehicles = async () => {
    try {
      const response = await axios.get(
        "https://findfalcone.herokuapp.com/vehicles"
      );
      const data = response.data;
      return data;
      //console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getAllDestinations = async () => {
    try {
      const response = await axios.get(
        "https://findfalcone.herokuapp.com/planets"
      );
      const data = response.data;
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      let dest_res = await getAllDestinations();
      let vehicle_res = await getAllVehicles();
      // console.log(vehicle_res)
      setDestination(dest_res);
      setVehicles(vehicle_res);
    })();
  }, []);

  return (
    <>
      <div className="Header">Finding Falcone</div>
      <div className="main-body">
        <div className="body-header">Select Planet you want to Search in:</div>
        <div className="Destination_card">
          <Destination
            destination_count={destination_count}
            Destination_list={destination}
          />
        </div>
        <button type="button" className="btn btn-primary">
          Find Falcone
        </button>
      </div>
    </>
  );
}

export default Main;
