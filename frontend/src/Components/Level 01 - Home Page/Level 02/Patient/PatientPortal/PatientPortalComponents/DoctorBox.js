import React from 'react';
import './DoctorBox.css';

function DoctorBox({doctor,setIndex,setDoctorForInfo}) {
  const showDoctorInfo=()=>{
    setIndex(5);
    setDoctorForInfo(doctor);
  }
  return (
    <div className='DoctorBox'>
      <div className='DoctorImage'><img src={doctor.Img}></img></div>
      <h2>{doctor.Name}</h2>
      <h3>{doctor.Speciality}</h3>
      <button onClick={showDoctorInfo}>Book Appointment</button>
    </div>
  )
}

export default DoctorBox