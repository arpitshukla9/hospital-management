import React, { useEffect, useState } from 'react'
import { getDoctors } from '../../../../../../API/api';
import DoctorBox from './DoctorBox';
import './BookAppointment.css'
function BookAppointment({setIndex,setDoctorForInfo}) {
    const[doctorsList,setDoctorsList] = useState([]);
    useEffect(()=>{
        const doctorsListFunc=async()=>{
            let list = await getDoctors();
            setDoctorsList(list);
        }
        doctorsListFunc();
    },[]);
    
  return (
    <div className='BookAppointment'>
        <h1>Our Doctors</h1>
        <div className='DoctorBoxes'>
        {doctorsList ? (
                doctorsList.map((doctor) => (
                    <DoctorBox doctor={doctor} setIndex={setIndex} setDoctorForInfo={setDoctorForInfo}/>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    </div>
  )
}

export default BookAppointment