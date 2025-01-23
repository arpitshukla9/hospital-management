import React,{useState} from 'react'
import './PatientRegister.css'
import { addPatient } from '../../../../API/api';
function PatientRegister({incompleteFormDetails}) {

    const [PatientRegisterForm, setPatientRegisterForm] = useState({
        Name: '',
        age: '',
        gender: '',
        mobileNo: '',
        UserName: '',
        password:'',
        address:'',
        photo:null,
        DoB:'',
        blood:'',
        user:'Patient',
        img:''
      });
      const addImg=(e)=>{
        const file = e.target.files[0];
        if(file){
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=()=>{
            const base = reader.result;
            setPatientRegisterForm({
              ...PatientRegisterForm,
              img: base
            });
          }
        }
      }
      const handleChange = (e) => {
        const { name, value} = e.target;
        setPatientRegisterForm((prevForm) => ({
          ...prevForm,
          [name]: value,
        }));
      };
    
      const handleSubmit = async(e) => {
        if(PatientRegisterForm.password.length>=6 && PatientRegisterForm.UserName!=='' && PatientRegisterForm.gender!=='' && PatientRegisterForm.age!=='' && PatientRegisterForm.mobileNo.length>=10 && PatientRegisterForm.img.length<90000){
        
          let patient={
          Name:PatientRegisterForm.Name,
          Age:PatientRegisterForm.age,
          Gender:PatientRegisterForm.gender,
          MobileNo:PatientRegisterForm.mobileNo,
          UserName:PatientRegisterForm.UserName,
          Password:PatientRegisterForm.password,
          Address:PatientRegisterForm.address,
          DoB:PatientRegisterForm.DoB,
          Blood:PatientRegisterForm.blood,
          User:PatientRegisterForm.user,
          Img:PatientRegisterForm.img

        }
        let res = await addPatient(patient);
        alert(res);

      }else{
        alert("Your details are incorrect !\n\n" +
        "Please remember these points while filling the form-\n\n"+
      "-->Your mobile number should be 10 digit. Please double-check.\n" +
      "-->Your password must be at least 6 characters long.\n" +
      "-->* marked fields are required !\n" +
      "-->Image size should be less then 75kb\n"
    );

      }
      };
  return (
    <div className='PatientRegister'>
      <h2>Patient Register</h2>
      <div className='PatientRegisterForm' >
        
          
            <label>
              Name*:
              <input type="text" name="Name" value={PatientRegisterForm.lastName} onChange={handleChange} required/>
            </label>
          <br />
          <div className='mini-inputs'>
          <label>
            Age Group*:
            <select name="age" value={PatientRegisterForm.age} onChange={handleChange} required>
              <option value="">Select Age Group</option>
              <option value="01-10">01-10</option>
              <option value="11-20">11-20</option>
              <option value="21-30">21-30</option>
              <option value="31-40">31-40</option>
              <option value="41-50">41-50</option>
              <option value="51-60">51-60</option>    
              <option value="60+">60+</option>              

            </select>
          </label>

          <label>
            Gender*:
            <select name="gender" value={PatientRegisterForm.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Blood Group*:
            <select name="blood" value={PatientRegisterForm.blood} onChange={handleChange} required>
              <option value="">Select Blood Group</option>
              <option value="Male">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </label>
          </div>
          <br />


          <label>
            Mobile Number*:
            <input type="text" name="mobileNo" value={PatientRegisterForm.mobileNo} onChange={handleChange} required/>
          </label>
          <br />

          <label>
            UserName*:
            <input type="text" name="UserName" value={PatientRegisterForm.UserName} onChange={handleChange} required/>
          </label>
          <br />

          <label>
            Password*:
            <input type="text" name="password" value={PatientRegisterForm.password} onChange={handleChange} required/>
          </label>

          <br />

          <label>
            Address:
            <input type="text" name="address" value={PatientRegisterForm.address} onChange={handleChange} />
          </label>
          <br />
          
          <label>
            Date of Birth*:
            <input type="date" name="DoB" value={PatientRegisterForm.selectedDate} onChange={handleChange} required/>
          </label>
          <br />
          <label>
            Upload Photo:
            <input type="file" name="photo" onChange={addImg} />
            <h6 style={{color:'orange', fontWeight:'100'}}>* Image size should be less then 75kb</h6>
          </label>
          <br />
          <button onClick={handleSubmit}>Register</button>
      </div>
    </div>
  );
}

export default PatientRegister;