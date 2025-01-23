import React, { useContext, useState } from 'react';
import './AppointmentDoctor.css';
import {updateAppointment} from './../../../../../../API/api.js';
import { DetailsProvider } from '../../../../../../Context/context.js';
function AppointmentDoctor({appointment}) {
  const rejectAppointment = async()=>{
    appointment.Status = "-1";
    let res = await updateAppointment(appointment._id,"-1");
    console.log(res);
    alert("Appointment has been Rejected");



  }
  const acceptAppointment = async()=>{
    appointment.Status = "1";
    let res = await updateAppointment(appointment._id,"1");
    console.log(res);
    alert("Appointment has been Accepted");
  }
  return (
    
    <div className='AppointmentDoctor'>
        <div style={{display:'flex', alignItems:'center'}}>
          {
            appointment.Payment==="-1"?<div style={{backgroundColor:"red", width:'10px',height:'10px' , borderRadius:'10px', margin:'15px'}}></div>:<div  style={{backgroundColor:"Green", width:'10px',height:'10px', borderRadius:'10px', margin:'15px'}}></div>
          }
          <h2>{appointment.Name}</h2>
        </div>
        <div className='PatientDetailD'>
        <div className='OtherDetailsD'>
        <p>Gender :{appointment.Gender}</p>
        <p>Blood Group :{appointment.Blood}</p>
        </div>
        <div className='OtherDetailsD'>
        <p>Date :{appointment.Date}</p>
        <p>Time :{appointment.Time}</p>
        </div>
        <div className='OtherDetailsD'>
        <p>Contact no. :{appointment.MobileNo}</p>
        <p>Address :{appointment.Address}</p>
        </div>
        {appointment.Status==='0'?
        <div className='OtherDetailsDButton'>
            <button style={{backgroundColor:'rgb(2, 220, 10)'}} onClick={acceptAppointment}>Accept</button>
            <button style={{backgroundColor:'rgb(227, 60, 47)'}} onClick={rejectAppointment}>Reject</button>

        </div>:<div className='OtherDetailsDButton'>{appointment.Status==='-1'?
        <button style={{backgroundColor:'rgb(227, 60, 47)', marginTop:'25px', cursor:'not-allowed'}}>Rejected</button>:
        <button style={{backgroundColor:'#3cb548', marginTop:'25px',cursor:'not-allowed'}}>Accepted</button>}</div>}
        </div>
        </div>
  )
}

export default AppointmentDoctor