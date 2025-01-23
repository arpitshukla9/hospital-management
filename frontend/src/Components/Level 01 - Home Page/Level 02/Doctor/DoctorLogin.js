
import React, { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './DoctorLogin.css';
import { getDoctorPassword } from '../../../../API/api';
import {DetailsProvider} from '../../../../Context/context';
function DoctorLogin() {
  const{setUser} = useContext(DetailsProvider);
  const navigate = useNavigate();
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
    const doctor = await getDoctorPassword({UserName:formData.UserName});
    if(typeof doctor==="object"){
      if(doctor.Password===formData.password){
        await setUser(doctor);
        navigate('/DoctorPortal');
      }else{
        alert("Wrong Password. ");
      }
    }else{
      alert(doctor);
    }
    
  };

  return (
    <div className='DoctorLogin'>
      <h1>Doctor Login</h1>
      <div className='DoctorLoginForm'>
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

export default DoctorLogin;
