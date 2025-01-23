import React, { useContext } from 'react';
import { DetailsProvider } from '../../../../../../Context/context';
import './PatientProfile.css'
function PatientProfile() {
  const{user} = useContext(DetailsProvider);
  return (
    <div className='PatientProfile'>
      {user?.Name ? (
        <div>
            <div className='PatientDetails'>
              <h1>Patient Details</h1>
              <div className='PatientDetailsInfo'>
                <h3>Name &emsp;&emsp;&emsp; :&emsp;&emsp; &emsp;&emsp;&emsp;&emsp;{user.Name}</h3>
                <h3>Age Group&emsp; :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.Age}</h3>
                <h3>Gender &emsp;&emsp;&nbsp;  :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.Gender}</h3>
                <h3>Blood Group : &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.Blood}</h3>
                <h3>Date of Birth :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.DoB}</h3>
                <h3>Mobile No.&emsp; :&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{user.MobileNo}</h3>
                <h3>Address &emsp;&emsp;:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.Address}</h3>

              </div>
            </div>
            <div className='PatientProfilePicture'><img src={user.Img}></img></div>

          






















        </div>
      ) : (
        <div>
          <p style={{fontSize:'40px', textAlign:'center', marginTop:'300px', fontWeight:'600', color:'rgb(90,20,20)'}}>Please LogIn to your Account</p>
        </div>
      )}
    </div>
  );
}

export default PatientProfile;
