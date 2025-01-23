
import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const Navigate = useNavigate();
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

  const handleSubmit = (e) => {
    if(formData.password==="123456" && formData.UserName==="Prashant@01"){
      Navigate('/adminPortal');
    }else{
      alert("Wrong Admin UserName or Pasword");
    }
  };

  return (
    <div className='AdminLogin'>
      <h1>Admin Login</h1>
      <div className='AdminLoginForm'>
        <form onSubmit={handleSubmit}>
          <label>
            Your UserName:
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

          <button type="submit">Login</button>
        </form>
      </div>
      <div style={{margin:'20px', fontFamily:'cursive', fontWeight:'100', textAlign:'center', color:'#303030'}}>
      <h4>Demo UserName - Prashant@01</h4>
      <h4>Demo Password - 123456</h4>
      </div>
    </div>
  );
}

export default AdminLogin;
