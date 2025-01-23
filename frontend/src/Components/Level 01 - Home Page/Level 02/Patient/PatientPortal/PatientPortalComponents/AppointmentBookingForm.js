import React, { useContext, useState } from 'react';
import './AppointmentBookingForm.css'
import { DetailsProvider } from '../../../../../../Context/context';
import { addAppointment } from '../../../../../../API/api';
function AppointmentBookingForm({ doctorForInfo ,setIndex}) {
  const {user} = useContext(DetailsProvider);

  const [formData, setFormData] = useState({
    Name: user.Name,
    UserName: user.UserName,
    Age: user.age,
    MobileNo: user.MobileNo,
    Address: user.Address,
    Blood:user.Blood,
    DoB: user.DoB,
    Gender: user.Gender,
    Time: '',
    Date: '',
    Payment: '-1',
    Status: '0',
    DoctorId: doctorForInfo.UserName,
    DoctorName: doctorForInfo.Name,
    DoctorSpeciality: doctorForInfo.Speciality,
    Fees:doctorForInfo.Fees


  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    setIndex(1);

    if(formData.Date!='' && formData.Time!=''){
          let res = await addAppointment(formData);
          alert(res);
         
    } else{
        alert("Please select the valid time and date")
    }
    
  };
  
  return (
    <div className='AppointmentBookingForm'>
      <h2>Appointment Booking Form</h2>
      <div className='AppointmentForm'>
        <label> Name:
          <input type='text' name='Name' value={user.Name} readOnly/>
        </label>
        <br />
        <label> Date of Birth:
          <input type='text' name='DoB' value={user.DoB} readOnly/>
        </label>
        <br />
        <label> Gender:
          <input type='text' name='Gender' value={user.Gender} readOnly/>
        </label>
        <br />

        <label> Time:
            <select name='Time' value={formData.Time} onChange={handleChange} required >
                <option value='' disabled>Select a time</option>
                <option value='10:00 AM'>10:00 AM - 11:00 AM</option>
                <option value='11:00 AM'>11:00 AM - 12:00 PM</option>
                <option value='12:00 PM'>12:00 PM - 01:00 PM</option>
                <option value='12:00 PM'>01:00 PM - 02:00 PM</option>
                <option value='12:00 PM'>02:00 PM - 03:00 PM</option>
                <option value='12:00 PM'>03:00 PM - 04:00 PM</option>
                <option value='12:00 PM'>04:00 PM - 05:00 PM</option>
                <option value='12:00 PM'>05:00 PM - 06:00 PM</option>
            </select>
        </label>
        <br/>
        <label> Date:
          <input type='date'  name='Date' value={formData.Date} onChange={handleChange} required/>
        </label>
        <br />
        <label> Doctor Name:
          <input type='text' name='DoctorName' value={doctorForInfo.Name} readOnly/>
        </label>
        <br />
        <label> Speciality:
          <input type='text' name='Speciality' value={doctorForInfo.Speciality} readOnly/>
        </label>
        <br />
        <label> Fees:
          <input type='text' name='Fees' value={doctorForInfo.Fees} readOnly/>
        </label>
        <br />
        <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  );
}

export default AppointmentBookingForm;
