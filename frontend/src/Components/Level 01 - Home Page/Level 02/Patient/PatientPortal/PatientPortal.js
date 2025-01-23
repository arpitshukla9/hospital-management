import React, { useEffect, useState,useContext } from 'react';
import './PatientPortal.css';
import PatientProfile from './PatientPortalComponents/PatientProfile';
import BookAppointment from './PatientPortalComponents/BookAppointment';
import UpdateDetails from './PatientPortalComponents/UpdateDetails';
import AppointmentStatus from './PatientPortalComponents/AppointmentStatus';
import DoctorInfoForBooking from './PatientPortalComponents/DoctorInfoForBooking';
import AppointmentBookingForm from './PatientPortalComponents/AppointmentBookingForm';
import PaymentStatus from './PatientPortalComponents/PaymentStatus';
import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../../../../../API/api';
import { DetailsProvider } from '../../../../../Context/context';

function PatientPortal() {
  const navigate = useNavigate();
  const [index,setIndex] = useState(1);
  const [doctorForInfo,setDoctorForInfo] = useState({});
  const{setAppointment,refresh} = useContext(DetailsProvider);
  
  const logout=()=>{
    navigate('/');
  }

  useEffect(()=>{
    const getAppointment=async()=>{
      let res = await getAppointments();
      await setAppointment(res);
    }
    getAppointment();
  },[index]);
  return (
    <div className='PatientPortal'>
        <div className='PatientBar'>
            {index==1?<PatientProfile></PatientProfile>:<></>}
            {index==2?<BookAppointment setIndex={setIndex} setDoctorForInfo={setDoctorForInfo}></BookAppointment>:<></>}
            {index==3?<AppointmentStatus></AppointmentStatus>:<></>}
            {index==4?<UpdateDetails></UpdateDetails>:<></>}
            {index==5?<DoctorInfoForBooking doctorForInfo={doctorForInfo} setIndex={setIndex}></DoctorInfoForBooking>:<></>}
            {index==6?<AppointmentBookingForm doctorForInfo={doctorForInfo} setIndex={setIndex}></AppointmentBookingForm>:<></>}
            {index==7?<PaymentStatus setIndex={setIndex}></PaymentStatus>:<></>}

        </div>
        <div className='PatientMenuBar'>
            <h2>Menu</h2>
            <div className='PatientMenuBarButtons'>
                <button onClick={(e)=>setIndex(1)}>Profile</button>
                <button onClick={(e)=>setIndex(2)}>Book Appointment</button>
                <button onClick={(e)=>setIndex(3)}>Appointment Status</button>
                <button onClick={(e)=>setIndex(4)}>Update details</button>
                <button onClick={(e)=>setIndex(7)}>Payment Status</button>

                <button onClick={logout}>Logout</button>

            </div>
        </div>
    </div>
  )
}

export default PatientPortal