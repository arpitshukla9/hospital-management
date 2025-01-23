import React, { useContext, useEffect, useState } from 'react'
import './DoctorAppointmentList.css';
import { DetailsProvider } from '../../../../../../Context/context';
import Appointment from './AppointmentDoctor';
function DoctorAppointmentList() {
    const{user,appointment} = useContext(DetailsProvider);
  return (
    <div className='DoctorAppointmentList'>
        <h1>Appointments</h1>
        <div>
        {appointment.length===0 ?<h1>No appointment available</h1>: (
          appointment.map((appointment) =>
            user.UserName === appointment.DoctorId ? (
              <Appointment
                appointment={appointment}
              />
            ) : null
          )
        ) }
      </div>
    </div>
  )
}

export default DoctorAppointmentList