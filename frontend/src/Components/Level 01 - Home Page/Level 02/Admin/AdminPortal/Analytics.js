import React, { useContext, useEffect, useState } from 'react';
import DataBox from './DataBox';
import './Analytics.css';
import { getNoOfDoctors, getNoOfPatients, getNoOfAppointments, getAppointments,getDoctors } from '../../../../../API/api';
import { DetailsProvider } from '../../../../../Context/context';

function Analytics() {
  const { setAppointment, appointment } = useContext(DetailsProvider);
  const [noOfDoctors, setNoOfDoctors] = useState();
  const [noOfPatients, setNoOfPatients] = useState();
  const [noOfAppointments, setNoOfAppointments] = useState();
  const [totalRevenue, setTotalRevenue] = useState();
  const [doctors,setDoctors] = useState([]);

  useEffect(() => {
    const getTotalNo = async () => {
      let r1 = await getNoOfDoctors();
      setNoOfDoctors(r1.result);

      let r2 = await getNoOfPatients();
      setNoOfPatients(r2.result);

      let r3 = await getNoOfAppointments();
      setNoOfAppointments(r3.result);

      let r4 = await getAppointments();
      await setAppointment(r4);

      let r5 = await getDoctors();
      await setDoctors(r5);
    };

    getTotalNo();
  }, [setAppointment]);

  useEffect(() => {
    let total = 0;
    appointment.forEach((item) => {
      total += parseInt(item.Fees, 10) || 0;
    });
    setTotalRevenue(total);
    console.log(total);
  }, [appointment]);

  return (
    <div className='Analytics'>
      <h1>Hospital Analytics</h1>
      <div className='DataBoxes'>
        <DataBox keys={"Total Patients"} value={noOfPatients}></DataBox>
        <DataBox keys={"Total Doctors"} value={noOfDoctors}></DataBox>
        <DataBox keys={"Total Appointments"} value={noOfAppointments}></DataBox>
        <DataBox keys={"Total Revenue"} value={totalRevenue}></DataBox>
        <div style={{backgroundColor:'rgb(104, 149, 169)', width:'100%',margin:'20px',borderRadius:'10px',padding:'15px', border:'2px solid rgb(95, 95, 167)'}}>
            <h2 style={{fontSize:'30px',fontFamily:"serif", padding:'10px'}}>Doctors List</h2>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'30px',marginRight:'30px',marginTop:'10px',color:'#090745',padding:'10px'}}>
                <h3>Name</h3><h3>Gender</h3><h3>Speciality</h3><h3>Fees charges</h3><h3>Age group</h3><h3>Contact no.</h3>
            </div>
        {doctors.map((doc)=>(
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'30px',marginRight:'30px',marginTop:'10px',backgroundColor:'rgb(102, 250, 200)',padding:'10px', borderRadius:'5px', border:'2px solid green'}}>
                <h3>{doc.Name}</h3>
                <h3>{doc.Gender}</h3>
                <h3>{doc.Speciality}</h3>
                <h3>{doc.Fees}</h3>
                <h3>{doc.Age}</h3>
                <h3>{doc.MobileNo}</h3>
            </div>
        ))}
      </div>
      </div>

    </div>
  );
}

export default Analytics;
