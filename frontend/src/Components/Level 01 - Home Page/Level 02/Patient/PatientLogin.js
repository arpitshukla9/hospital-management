import React, { useState,useContext } from 'react';
import './PatientLogin.css';
import { useNavigate } from 'react-router-dom';
import { getPatientPassword } from '../../../../API/api';
import { DetailsProvider } from '../../../../Context/context';
function PatientLogin() {
  const navigate = useNavigate();

  const {setUser} = useContext(DetailsProvider);
  const [formData, setFormData] = useState({
    UserName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    const patient = await getPatientPassword({UserName:formData.UserName});
    if(typeof patient==="object"){
      if(patient.Password===formData.password){
        await setUser(patient);
        navigate('/PatientPortal');
      }else{
        alert("Wrong Password. ");
      }
    }else{
      alert(patient);
    }
    
  };

  return (
    <div className='PatientLogin'>
      <h1>Patient Login</h1>
      <div className='PatientLoginForm'>
          <label>
            UserName:
            <input
              type="text"
              name="UserName"
              value={formData.UserName}
              onChange={handleChange}
              placeholder="Enter your UserName"
            />
          </label>
          <br />

          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </label>
          <br />

          <button onClick={handleSubmit}>Login</button>
      </div>
  
    </div>
  );
}

export default PatientLogin;
