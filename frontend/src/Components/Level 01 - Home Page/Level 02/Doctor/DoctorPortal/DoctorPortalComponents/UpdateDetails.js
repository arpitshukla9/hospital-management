import React, { useContext, useState } from 'react'
import './UpdateDetails.css';
import { DetailsProvider } from '../../../../../../Context/context';
import {DUpdateName, DUpdateAddress,DUpdateAge,DUpdateGender,DUpdateBlood,DUpdateMobileNo,DUpdatePassword,DUpdateDoB,DUpdateSpeciality,DUpdateFees} from './../../../../../../API/api';
function UpdateDetails() {
  const{user} = useContext(DetailsProvider);
  const[name,setName] = useState("");
  const[age,setAge] = useState("");
  const[gender,setGender] = useState("");
  const[fees,setFees] = useState("");
  const[speciality,setSpeciality] = useState("");
  const[blood,setBlood] = useState("");
  const[mobileNo,setMobileNo] = useState("");
  const[password,setPassword] = useState("");
  const[address,setAddress] = useState("");
  const[DoB,setDoB] = useState("");


  const UpdateName = async()=>{
    let res = await DUpdateName(user._id,name);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdateAge = async()=>{
    let res = await DUpdateAge(user._id,age);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdateGender = async()=>{
    let res = await DUpdateGender(user._id,gender);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdateFees = async()=>{
    let res = await DUpdateFees(user._id,fees);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdateSpeciality = async()=>{
    let res = await DUpdateSpeciality(user._id,speciality);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdateBlood = async()=>{
    let res = await DUpdateBlood(user._id,blood);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdateMobileNo = async()=>{
    let res = await DUpdateMobileNo(user._id,mobileNo);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdatePassword = async()=>{
    let res = await DUpdatePassword(user._id,password);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdateAddress = async()=>{
    let res = await DUpdateAddress(user._id,address);
    alert("Updated Successfully ! Please log in again.");
  }
  const UpdateDoB = async()=>{
    let res = await DUpdateDoB(user._id,DoB);
    alert("Updated Successfully ! Please log in again.");
  }

  return (
    <div className='UpdateDetails'>
      <h1>Update Your Details</h1>
      <div className='SpecificDetails'>          
            <label>
              Update Name -
              <input type="text" onChange={(e)=>setName(e.target.value)}/>
              <button onClick={UpdateName}>Update</button>
            </label>
          <br />
          
          <label>
            Update Age Group -
            <select onChange={(e)=>setAge(e.target.value)} >
              <option value="">Select Age Group</option>
              <option value="01-10">01-10</option>
              <option value="11-20">11-20</option>
              <option value="21-30">21-30</option>
              <option value="31-40">31-40</option>
              <option value="41-50">41-50</option>
              <option value="51-60">51-60</option>    
              <option value="60+">60+</option>              

            </select>
            <button onClick={UpdateAge}>Update</button>

          </label>
          <br/>

          <label>
            Update Gender -
            <select onChange={(e)=>setGender(e.target.value)}  >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <button onClick={UpdateGender}>Update</button>

          </label>
          <br/>
          <label>
            Speciality*:
            <select onChange={(e)=>setSpeciality(e.target.value)}>
              <option value="">Select Speciality</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Gastroenterology">Gastroenterology</option>
              <option value="Neurology">Neurology</option>
              <option value="Oncology">Oncology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pediatrics">Pediatrics</option>
              <option value="Psychiatry">Psychiatry</option>
            </select>
            <button onClick={UpdateSpeciality}>Update</button>

          </label>
          <br />

          <label>
            Charges per hours*:
            <input type="text" onChange={(e)=>setFees(e.target.value)}/>
            <button onClick={UpdateFees}>Update</button>

          </label>
          <br/>
          

          <label>
            Update Blood Group -
            <select onChange={(e)=>setBlood(e.target.value)}  >
              <option value="Male">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
            <button onClick={UpdateBlood}>Update</button>

          </label>
          <br />


          <label>
            Update Mobile Number - 
            <input type="text" onChange={(e)=>setMobileNo(e.target.value)}  />
            <button onClick={UpdateMobileNo}>Update</button>

          </label>
          
          <br />

          <label>
            Change Password - 
            <input type="text" onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={UpdatePassword}>Update</button>

          </label>

          <br />

          <label>
            Update Address -
            <input type="text" onChange={(e)=>setAddress(e.target.value)} />
            <button onClick={UpdateAddress}>Update</button>

          </label>
          <br />
          
          <label>
            Change Date of Birth -
            <input type="date" onChange={(e)=>setDoB(e.target.value)}/>
            <button onClick={UpdateDoB}>Update</button>

          </label>
          <br />
          <label>
            Upload Photo:
            <input type="file" />
            <button onClick={alert("Soory, some error occured !!")}>Update</button>
          </label>
          <br />
      </div>
      </div>
  )
}

export default UpdateDetails