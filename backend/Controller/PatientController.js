import PatientSchema from '../Schema/PatientSchema.js';
export const addPatient=async(req,res)=>{
    try{
        let exist = await PatientSchema.findOne({UserName: req.body.UserName});
        if(exist){
            res.status(200).json("registered Successfully !");
            return;
        }
        const newPatient = new PatientSchema(req.body);
        await newPatient.save();
        return res.status(200).json("registered Successfully !");
        
    }catch(error){
        return res.status(500).json(error.message+"Error occured");
    }
}
export const getPatientPassword=async(req,res)=>{
    try{
        let exist = await PatientSchema.findOne({UserName: req.body.UserName});
        if(exist){
            return res.status(200).json(exist);
        }
        else{
            return res.status(200).json("Patient with this UserName doesn't exist");
        }
    }catch(error){
        return res.status(500).json(error.message+"Error occured");
    }
}

export const getNoOfPatients=async(req,res)=>{
    try{
        let result = await PatientSchema.countDocuments();
        return res.status(200).json({result});
    }catch(error){
        return res.status(500).json(error.message+"Error occured");
    }
}

export const patientUpdateName = async(req,res)=>{
    try{
        const patientId = req.params.id;
        const updated = req.body.Name;
        await PatientSchema.findByIdAndUpdate(patientId,{Name:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Errormessage");

    }
}


export const patientUpdateAge = async(req,res)=>{
    try{
        const patientId = req.params.id;
        const updated = req.body.Age;
        await PatientSchema.findByIdAndUpdate(patientId,{Age:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const patientUpdateGender = async(req,res)=>{
    try{
        const patientId = req.params.id;
        const updated = req.body.Gender;
        await PatientSchema.findByIdAndUpdate(patientId,{Gender:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const patientUpdateBlood = async(req,res)=>{
    try{
        const patientId = req.params.id;
        const updated = req.body.Blood;
        await PatientSchema.findByIdAndUpdate(patientId,{Blood:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const patientUpdateAddress = async(req,res)=>{
    try{
        const patientId = req.params.id;
        const updated = req.body.Address;
        await PatientSchema.findByIdAndUpdate(patientId,{Address:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const patientUpdatePassword = async(req,res)=>{
    try{
        const patientId = req.params.id;
        const updated = req.body.Password;
        await PatientSchema.findByIdAndUpdate(patientId,{Password:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const patientUpdateMobileNo = async(req,res)=>{
    try{
        const patientId = req.params.id;
        const updated = req.body.MobileNo;
        await PatientSchema.findByIdAndUpdate(patientId,{MobileNo:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const patientUpdateDoB = async(req,res)=>{
    try{
        const patientId = req.params.id;
        const updated = req.body.DoB;
        await PatientSchema.findByIdAndUpdate(patientId,{DoB:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}