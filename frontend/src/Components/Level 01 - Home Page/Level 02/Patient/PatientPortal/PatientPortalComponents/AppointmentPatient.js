import React from 'react'
import './AppointmentPatient.css'
function AppointmentPatient({appointment}) {
  return (
    <div className='AppointmentPatient'>
        <div className='PatientDetailP'>
        <div className='OtherDetailsP'>
            <p>Doctor Name : {appointment.DoctorName}</p>
            <p>Doctor Speciality : {appointment.DoctorSpeciality}</p>
            <p>Payment Status : {appointment.Payment ==="-1"?<span>❌ Not Done</span>:<span>✅ Done</span>}</p>

        </div>
        <div className='OtherDetailsP'>
            <p>Date : {appointment.Date}</p>
            <p>Time : {appointment.Time}</p>

        </div>
        <div className='OtherDetailsP' style={{display:'flex', flexDirection:'column', alignItems:'center', margin:'20px'}}>
            <h4>Appointment Status</h4>
            <p>{appointment.Status==='0'?<div style={{backgroundColor:'#d3e046', width:'80px', padding:'8px', textAlign:'center', borderRadius:'10px', color:'black', fontFamily:'sans-serif', fontSize:'15px', cursor:'no-drop'}}>Waiting</div>:appointment.Status==='1'?<div  style={{backgroundColor:'#61de45', width:'80px', padding:'8px', textAlign:'center', borderRadius:'10px', color:'white', fontFamily:'sans-serif', fontSize:'15px',cursor:'no-drop'}}>Accepted</div>:<div  style={{backgroundColor:'#de3e3e', width:'80px', padding:'8px', textAlign:'center', borderRadius:'10px', color:'white', fontFamily:'sans-serif', fontSize:'15px',cursor:'no-drop'}}>Rejected</div>}</p>
        </div>
       
            
        </div>
    </div>
  )
}
export default AppointmentPatient