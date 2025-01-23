import React from 'react'
import './BookingHomePage.css'
import { Link } from 'react-router-dom'
function BookingHomePage() {
  return (
    <div className='BookingHomePage'>
      <div className='Loginbox' style={{backgroundColor:'#D32F2F'}}>
        <h1>Patient</h1>
        <div className='LogiBoxbutton'>
        <Link to='/PatientLogin'><button>Login</button></Link>
        <Link to='/PatientRegister'><button>Registration</button></Link>
        </div>
        
      </div>
      <div className='Loginbox' style={{backgroundColor:'#D32F2F'}}>
        <h1>Doctor</h1>
        <div className='LogiBoxbutton' >
        <Link to='DoctorLogin'><button>Login</button></Link>
        <Link to='DoctorRegister'><button>Registration</button></Link>
        </div>
      </div>
      <div className='Loginbox' style={{backgroundColor:'#D32F2F'}}>
      </div>

    </div>
  )
}

export default BookingHomePage