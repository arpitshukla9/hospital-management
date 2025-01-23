import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import PatientLogin from './Components/Level 01 - Home Page/Level 02/Patient/PatientLogin';
import PatientRegister from './Components/Level 01 - Home Page/Level 02/Patient/PatientRegister';
import DoctorLogin from './Components/Level 01 - Home Page/Level 02/Doctor/DoctorLogin';
import DoctorRegister from './Components/Level 01 - Home Page/Level 02/Doctor/DoctorRegister';
import AdminLogin from './Components/Level 01 - Home Page/Level 02/Admin/AdminLogin';
import DoctorPortal from './Components/Level 01 - Home Page/Level 02/Doctor/DoctorPortal/DoctorPortal';
import PatientPortal from './Components/Level 01 - Home Page/Level 02/Patient/PatientPortal/PatientPortal';
import Details from './Context/context';
import Analytics from './Components/Level 01 - Home Page/Level 02/Admin/AdminPortal/Analytics';

function App() {
  return (
    <Router>
      <Details>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/PatientLogin" element={<PatientLogin />} />
            <Route path="/PatientRegister" element={<PatientRegister />} />
            <Route path="/DoctorLogin" element={<DoctorLogin />} />
            <Route path="/DoctorRegister" element={<DoctorRegister />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/PatientPortal" element={<PatientPortal />} />
            <Route path="/DoctorPortal" element={<DoctorPortal />} />
            <Route path="/AdminPortal" element={<Analytics />} />
          </Routes>
        </div>
      </Details>
    </Router>
  );
}

export default App;
