import React,{useState} from 'react'
import './DoctorRegister.css'
import { addDoctor } from '../../../../API/api';
function DoctorRegister() {
    const [DoctorRegisterForm, setDoctorRegisterForm] = useState({
        Name: '',
        age: '',
        gender: '',
        mobileNo: '',
        UserName: '',
        password:'',
        speciality:'',
        address:'',
        photo:null,
        blood:'',
        DoB:'',
        status:'NO',
        user:'Doctor',
        fees:'00',
        img:''
      });
      const addImg=(e)=>{
        const file = e.target.files[0];
        if(file){
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload=()=>{
            const base = reader.result;
            setDoctorRegisterForm({
              ...DoctorRegisterForm,
              img: base
            });
          }
        }
      }
      const handleChange = (e) => {
        const { name, value} = e.target;

        setDoctorRegisterForm((prevForm) => ({
        ...prevForm,
        [name]: value,
  }));
      };
    
      const handleSubmit = async(e) => {
        if(DoctorRegisterForm.password.length>=6 && DoctorRegisterForm.UserName!=='' && DoctorRegisterForm.gender!=='' && DoctorRegisterForm.age!=='' && DoctorRegisterForm.mobileNo.length>=10 && DoctorRegisterForm.speciality!=='' && DoctorRegisterForm.img.length<90000){        
          let doctor={
          Name:DoctorRegisterForm.Name,
          Age:DoctorRegisterForm.age,
          Gender:DoctorRegisterForm.gender,
          MobileNo:DoctorRegisterForm.mobileNo,
          UserName:DoctorRegisterForm.UserName,
          Password:DoctorRegisterForm.password,
          Address:DoctorRegisterForm.address,
          DoB:DoctorRegisterForm.DoB,
          Speciality:DoctorRegisterForm.speciality,
          Blood:DoctorRegisterForm.blood,
          Status:DoctorRegisterForm.status,
          User:DoctorRegisterForm.user,
          Fees:DoctorRegisterForm.fees,
          Img:DoctorRegisterForm.img
        }
        let res = await addDoctor(doctor);
        alert(res);
        
      }else{
        alert("Your details are incorrect !\n\n" +
        "Please remember these points while filling the form-\n\n"+
      "-->Your mobile number should be 10 digit. Please double-check.\n" +
      "-->Your password must be at least 6 characters long.\n" +
      "-->* marked fields are required !\n" +
      "-->* Image size should be less then 75kb\n"
    )
      }

      };
  return (
    <div className='DoctorRegister'>
      <h2>Doctor Register</h2>
      <div className='DoctorRegisterForm'>
          <label>
              Name*:
            <input type="text" name="Name" value={DoctorRegisterForm.lastName} onChange={handleChange} required/>
          </label>
          <br />
          <div className='mini-inputs'>
          <label>
            Age Group*:
            <select name="age" value={DoctorRegisterForm.age} onChange={handleChange} required>
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
            <select name="gender" value={DoctorRegisterForm.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Femal">Femal</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label>
            Blood Group*:
            <select name="blood" value={DoctorRegisterForm.blood} onChange={handleChange} required>
              <option value="">Select Blood Group</option>
              <option value="Male">A+</option>
              <option value="Femal">A-</option>
              <option value="Other">B+</option>
              <option value="Other">B-</option>
              <option value="Other">AB+</option>
              <option value="Other">AB-</option>
              <option value="Other">O+</option>
              <option value="Other">O-</option>
            </select>
          </label>
          </div>
          <br />


          <label>
            Mobile Number*:
            <input type="text" name="mobileNo" value={DoctorRegisterForm.mobileNo} onChange={handleChange}  required/>
          </label>
          <br />

          <label>
            UserName*:
            <input type="text" name="UserName" value={DoctorRegisterForm.UserName} onChange={handleChange} required/>
          </label>
          <br />
          
          <label>
            Password*:
            <input type="text" name="password" value={DoctorRegisterForm.password} onChange={handleChange} required/>
          </label>
          <br />

          <label>
            Speciality*:
            <select name="speciality" value={DoctorRegisterForm.speciality} onChange={handleChange} required>
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
          </label>
          <br />

          <label>
            Charges per hours*:
            <input type="text" name="fees" value={DoctorRegisterForm.fees} onChange={handleChange}  required/>
          </label>
          <br/>

          <label>
            Date of Birth*:
            <input type="date" name="DoB" value={DoctorRegisterForm.selectedDate} onChange={handleChange} required/>
          </label>
          <br />
          
          <label>
            Address:
            <input type="text" name="address" value={DoctorRegisterForm.address} onChange={handleChange} />
          </label>
          <br/>

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

export default DoctorRegister;