import express from 'express';
import { addPatient,getPatientPassword,getNoOfPatients, patientUpdateAddress,patientUpdateAge,patientUpdateBlood,patientUpdateDoB,patientUpdateGender,patientUpdateMobileNo,patientUpdateName,patientUpdatePassword } from '../Controller/PatientController.js';
import { addDoctor,getDoctorPassword,getNoOfDoctors,getDoctors, doctorUpdateAddress,doctorUpdateAge,doctorUpdateBlood,doctorUpdateDoB,doctorUpdateGender,doctorUpdateMobileNo,doctorUpdateName,doctorUpdatePassword, doctorUpdateSpeciality, doctorUpdateFees } from '../Controller/DoctorController.js'
import { addAppointment, getAppointments,updateAppointment,getNoOfAppointments} from '../Controller/AppointmentController.js';
import {newPayment,checkStatus} from '../Controller/Phonepe.js';
const route  = express.Router();
route.post('/addPatient',addPatient);
route.post('/addDoctor',addDoctor);
route.post('/getDoctorPassword',getDoctorPassword);
route.post('/getPatientPassword',getPatientPassword);
route.get('/getDoctor',getDoctors);
route.post('/addAppointment',addAppointment);
route.get('/getAppointments',getAppointments);
route.put('/updateAppointment/:id',updateAppointment);
route.get('/getNoOfDoctors',getNoOfDoctors);
route.get('/getNoOfPatients',getNoOfPatients);
route.get('/getNoOfAppointments',getNoOfAppointments);
route.post('/payment', newPayment);
route.post('/status/:txnId', checkStatus);

route.put('/patientUpdateName/:id',patientUpdateName);
route.put('/patientUpdateAge/:id',patientUpdateAge);
route.put('/patientUpdateGender/:id',patientUpdateGender);
route.put('/patientUpdateDoB/:id',patientUpdateDoB);
route.put('/patientUpdateMobileNo/:id',patientUpdateMobileNo);
route.put('/patientUpdatePassword/:id',patientUpdatePassword);
route.put('/patientUpdateBlood/:id',patientUpdateBlood);
route.put('/patientUpdateAddress/:id',patientUpdateAddress);

route.put('/doctorUpdateName/:id',doctorUpdateName);
route.put('/doctorUpdateAge/:id',doctorUpdateAge);
route.put('/doctorUpdateGender/:id',doctorUpdateGender);
route.put('/doctorUpdateDoB/:id',doctorUpdateDoB);
route.put('/doctorUpdateMobileNo/:id',doctorUpdateMobileNo);
route.put('/doctorUpdatePassword/:id',doctorUpdatePassword);
route.put('/doctorUpdateBlood/:id',doctorUpdateBlood);
route.put('/doctorUpdateAddress/:id',doctorUpdateAddress);
route.put('/doctorUpdateFees/:id',doctorUpdateFees);
route.put('/doctorUpdateSpeciality/:id',doctorUpdateSpeciality);



export default route;