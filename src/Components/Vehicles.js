import axios from 'axios';
import React from 'react';

function Vehicles() {

  const getVehicles = async() => {
    let response = await axios.get("https://findfalcone.herokuapp.com/vehicles")
    return response.data
  }
  return (
    <>
    </>
  )
}

export default Vehicles;
