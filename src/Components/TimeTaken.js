import React, {useContext} from 'react'
import {AuthContext} from '../Context/AuthProvider'
import "../css/TimeTaken.css"

function TimeTaken() {
    const {selectedVehicle, selectedPlanets, Total_time, AllVehicles} = useContext(AuthContext)
    
  return (
      <>
      <div className='Time_Paper'>
      <div>TimeTaken - {Total_time}</div>
      {selectedVehicle.map((vehicle, index) => {
          return(
              <div className='Each_selected_Option'>{vehicle} to {selectedPlanets[index]} </div>
          )
      })}
      </div>
      </>
   
  )
}

export default TimeTaken