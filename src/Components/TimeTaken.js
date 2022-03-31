import React, {useContext} from 'react'
import {AuthContext} from '../Context/AuthProvider'
import "../css/TimeTaken.css"

function TimeTaken() {
    const {selectedVehicle, selectedPlanets, Total_time} = useContext(AuthContext)
    
  return (
      <>
      <div className='Time_Paper'>
      <div>TimeTaken - {Total_time}</div>
      {selectedVehicle.map((vehicle, index) => {
          return(
              <div className='Each_selected_Option' key = {index}>{vehicle} to {selectedPlanets[index]} </div>
          )
      })}
      </div>
      </>
   
  )
}

export default TimeTaken