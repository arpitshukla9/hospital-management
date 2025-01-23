import DoctorSchema from '../Schema/DoctorSchema.js';
export const addDoctor=async(req,res)=>{
    try{
        let exist = await DoctorSchema.findOne({UserName: req.body.UserName});
        if(exist){
            return res.status(200).json("Registered Successfully !");
            
        }
        const newDoctor = new DoctorSchema(req.body);
        await newDoctor.save();
        return res.status(200).json("Registered Successfully !");
        
    }catch(error){
        return res.status(500).json(error.message+"Error occured");
    }
}

export const getDoctors=async(req,res)=>{
    try{
        const data = await DoctorSchema.find({});
        return res.status(200).json(data);
    }catch(error){
        return res.status(500).json(error.message+" Error occured");
    }
}


export const getDoctorPassword=async(req,res)=>{
    try{
        let exist = await DoctorSchema.findOne({UserName: req.body.UserName});
        if(exist){
            return res.status(200).json(exist);
        }
        else{
            return res.status(200).json("Doctor with this UserName doesn't exist");
        }
    }catch(error){
        return res.status(500).json(error.message+"Error occured");
    }
}

export const getNoOfDoctors=async(req,res)=>{
    try{
        let result = await DoctorSchema.countDocuments();
        return res.status(200).json({result});
    }catch(error){
        return res.status(500).json(error.message+"Error occured");
    }
}




export const doctorUpdateName = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.Name;
        await DoctorSchema.findByIdAndUpdate(doctorId,{Name:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");
    }
}


export const doctorUpdateAge = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.Age;
        await DoctorSchema.findByIdAndUpdate(doctorId,{Age:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const doctorUpdateGender = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.Gender;
        await DoctorSchema.findByIdAndUpdate(doctorId,{Gender:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const doctorUpdateBlood = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.Blood;
        await DoctorSchema.findByIdAndUpdate(doctorId,{Blood:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const doctorUpdateAddress = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.Address;
        await DoctorSchema.findByIdAndUpdate(doctorId,{Address:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const doctorUpdatePassword = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.Password;
        await DoctorSchema.findByIdAndUpdate(doctorId,{Password:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const doctorUpdateMobileNo = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.MobileNo;
        await DoctorSchema.findByIdAndUpdate(doctorId,{MobileNo:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}
export const doctorUpdateDoB = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.DoB;
        await DoctorSchema.findByIdAndUpdate(doctorId,{DoB:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}

export const doctorUpdateFees = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.Fees;
        await DoctorSchema.findByIdAndUpdate(doctorId,{Fees:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}

export const doctorUpdateSpeciality = async(req,res)=>{
    try{
        const doctorId = req.params.id;
        const updated = req.body.Speciality;
        await DoctorSchema.findByIdAndUpdate(doctorId,{Speciality:updated});
        return res.status(200).json("Data updated Successfully");
    } catch(error){
        return res.status(500).json(error.message+"Error");

    }
}