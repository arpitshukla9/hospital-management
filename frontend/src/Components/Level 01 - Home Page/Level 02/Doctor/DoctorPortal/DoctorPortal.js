import React, { useEffect, useState,useContext } from 'react';
import './DoctorPortal.css';
import DoctorProfile from './DoctorPortalComponents/DoctorProfile';
import UpdateDetails from './DoctorPortalComponents/UpdateDetails';
import DoctorAppointmentList from './DoctorPortalComponents/DoctorAppointmentList';
import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../../../../../API/api';
import { DetailsProvider } from '../../../../../Context/context';

function DoctorPortal() {
  const navigate = useNavigate();
  const [index,setIndex] = useState(1);
  const{setAppointment} = useContext(DetailsProvider);
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
    <div className='DoctorPortal'>
        <div className='DoctorBar'>
            {index==1?<DoctorProfile></DoctorProfile>:<></>}
            {index==2?<UpdateDetails></UpdateDetails>:<></>}
            {index==3?<DoctorAppointmentList></DoctorAppointmentList>:<></>}


        </div>
        <div className='DoctorMenuBar'>
            <h2>Menu</h2>
            <div className='DoctorMenuBarButtons'>
                <button onClick={(e)=>setIndex(1)}>Profile</button>
                <button onClick={(e)=>setIndex(2)}>Update details</button>
                <button onClick={(e)=>setIndex(3)}>Appointments</button>

                <button onClick={logout}>Logout</button>

            </div>
        </div>
    </div>
  )
}

export default DoctorPortal