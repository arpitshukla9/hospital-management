import React, { useState } from 'react'
import './DoctorInfoForBooking.css'
function DoctorInfoForBooking({doctorForInfo,setIndex}) {
    const[slot,setSlot] = useState(["10AM-11AM","11AM-12PM","12PM-01PM","01PM-02PM","02PM-03PM","03PM-04PM","04PM-05PM"])
  return (
    <div className='DoctorBooking'>
    <h1>Booking Appointment</h1>
    <div className='DoctorInfoForBooking'>
        <img className='DoctorInfoForBookingImage' src={doctorForInfo.Img}></img>
        <div className='DoctorInfoForBookingInfo'>
            <h2>Name : Mr. {doctorForInfo.Name}</h2>
            <h2>Age : {doctorForInfo.Age} Years</h2>
            <h2>Specility : {doctorForInfo.Speciality}</h2>
            <h2>Gender : {doctorForInfo.Gender}</h2>
            <h2>MobileNo. : {doctorForInfo.MobileNo}</h2>
        </div>
        
    </div>
    <h1>Select Slot for Appointment</h1>
    <div className='Slots'>
        {
            slot.map((oneSlot)=>(
                <div className='slot'><button onClick={()=>setIndex(6)}>{oneSlot}</button></div>
            ))
        }
    </div>
    </div>
  )
}

export default DoctorInfoForBooking