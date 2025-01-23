import axios from 'axios';

// Render URL
const url = 'https://hospital-management-system-z0t3.onrender.com';
export const addPatient=async(data)=>{
    try{
        let res = await axios.post(`${url}/addPatient`,data);
        return res.data;
    }catch(error){
        console.log("Error occured");

    }
}
export const addDoctor=async(data)=>{
    try{
        let res = await axios.post(`${url}/addDoctor`,data);
        return res.data;

    }catch(error){
        console.log("Error occured");

    }
}

export const getDoctors=async()=>{
    try{
        let res = await axios.get(`${url}/getDoctor`);
        return res.data;
    }catch(error){
        console.log(error.message);
    }
}

export const getDoctorPassword=async(data)=>{
    try{
        let res = await axios.post(`${url}/getDoctorPassword`,data);
        return res.data;
    }catch(error){
        console.log("Doctor Password error");
    }
}


export const getPatientPassword=async(data)=>{
    try{
        let res = await axios.post(`${url}/getPatientPassword`,data);
        return res.data;
    }catch(error){
        console.log("Patient Password error");
    }
}

export const addAppointment=async(data)=>{
    try{
        let res = await axios.post(`${url}/addAppointment`,data);
        return res.data;
    } catch(error){
        console.log("Appointment Adding Error");
    }
}

export const getAppointments=async()=>{
    try{
        let res = await axios.get(`${url}/getAppointments`);
        return res.data;
    }catch(error){
        console.log(error.message);
    }
}

export const payment=async(data)=>{
    try{
        let res = await axios.post(`${url}/payment`,data);
        return res.data;
    }catch(error){
        console.log(error.message);
    }
}

export const updateAppointment=async(appointmentId,updatedStatus)=>{
    try{
        let res = await axios.put(`${url}/updateAppointment/${appointmentId}`,{status:updatedStatus});
        return res.data;
    }catch(error){
        console.log(error.message);
    }
}

export const getNoOfPatients=async()=>{
    try{
        let res = await axios.get(`${url}/getNoOfPatients`);
        return res.data;
    }catch(error){
        console.log(error.message);
    }
}

export const getNoOfDoctors=async()=>{
    try{
        let res = await axios.get(`${url}/getNoOfDoctors`);
        return res.data;
    }catch(error){
        console.log(error.message);
    }
}

export const getNoOfAppointments=async()=>{
    try{
        let res = await axios.get(`${url}/getNoOfAppointments`);
        return res.data;
    }catch(error){
        console.log(error.message);
    }
}


//////// Updating API's

// for PATIENT -

export const PUpdateName=async(patientId,updatedName)=>{
    try{
        let res = await axios.put(`${url}/patientUpdateName/${patientId}`,{Name:updatedName});
        return res;
    }catch(error){
        console.log(error.message+"error");
    }
}


export const PUpdateAddress=async(patientId,updatedAddress)=>{
    try{
        let res = await axios.put(`${url}/patientUpdateAddress/${patientId}`,{Address:updatedAddress});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const PUpdateAge=async(patientId,updatedAge)=>{
    try{
        let res = await axios.put(`${url}/patientUpdateAge/${patientId}`,{Age:updatedAge});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const PUpdateGender=async(patientId,updatedGender)=>{
    try{
        let res = await axios.put(`${url}/patientUpdateGender/${patientId}`,{Gender:updatedGender});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const PUpdateBlood=async(patientId,updatedBlood)=>{
    try{
        let res = await axios.put(`${url}/patientUpdateBlood/${patientId}`,{Blood:updatedBlood});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const PUpdateMobileNo=async(patientId,updatedMobileNo)=>{
    try{
        let res = await axios.put(`${url}/patientUpdateMobileNo/${patientId}`,{MobileNo:updatedMobileNo});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const PUpdatePassword=async(patientId,updatedPassword)=>{
    try{
        let res = await axios.put(`${url}/patientUpdatePassword/${patientId}`,{Password:updatedPassword});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const PUpdateDoB=async(patientId,updatedDoB)=>{
    try{
        let res = await axios.put(`${url}/patientUpdateDoB/${patientId}`,{DoB:updatedDoB});
        return res;
    }catch(error){
        console.log(error.message);
    }
}

// for DOCTOR -


export const DUpdateName=async(doctorId,updatedName)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateName/${doctorId}`,{Name:updatedName});
        return res;
    }catch(error){
        console.log(error.message);
    }
}


export const DUpdateAddress=async(doctorId,updatedAddress)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateAddress/${doctorId}`,{Address:updatedAddress});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const DUpdateAge=async(doctorId,updatedAge)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateAge/${doctorId}`,{Age:updatedAge});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const DUpdateGender=async(doctorId,updatedGender)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateGender/${doctorId}`,{Gender:updatedGender});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const DUpdateBlood=async(doctorId,updatedBlood)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateBlood/${doctorId}`,{Blood:updatedBlood});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const DUpdateMobileNo=async(doctorId,updatedMobileNo)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateMobileNo/${doctorId}`,{MobileNo:updatedMobileNo});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const DUpdatePassword=async(doctorId,updatedPassword)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdatePassword/${doctorId}`,{Password:updatedPassword});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const DUpdateDoB=async(doctorId,updatedDoB)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateDoB/${doctorId}`,{DoB:updatedDoB});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const DUpdateFees=async(doctorId,updatedFees)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateFees/${doctorId}`,{Fees:updatedFees});
        return res;
    }catch(error){
        console.log(error.message);
    }
}
export const DUpdateSpeciality=async(doctorId,updatedSpeciality)=>{
    try{
        let res = await axios.put(`${url}/doctorUpdateSpeciality/${doctorId}`,{Speciality:updatedSpeciality});
        return res;
    }catch(error){
        console.log(error.message);
    }
}