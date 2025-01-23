import React, { useContext, useEffect } from 'react'
import { DetailsProvider } from '../../../../../../Context/context';
import Appointment from './AppointmentPatient';
import './AppointmentStatus.css'
function AppointmentStatus() {
  const{user,appointment} = useContext(DetailsProvider);
  return (
    <div className='AppointmentStatus'>
      <h1>Your Appointments </h1>
      <div className='AppointmentList'>
      {appointment.length===0?<h1 style={{margin:'200px', border:'none', fontSize:'20px'}}>No appointment available</h1>: (
          appointment.map((appointment) =>
            (
              appointment.UserName===user.UserName && <Appointment
                appointment={appointment}
              />
            ) 
          )
        ) }
      </div>
    </div>
  )
}

export default AppointmentStatus