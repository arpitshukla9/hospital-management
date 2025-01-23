import AppointmentSchema from './../Schema/AppointmentSchema.js'

export const addAppointment=async(req,res)=>{
    try{
        let exist = await AppointmentSchema.findOne({
            UserName: req.body.UserName,
            DoctorId: req.body.DoctorId,
            Date:req.body.Date
        });
        if(exist){
            return res.status(200).json("Appointment already Available");
        }
        const data = new AppointmentSchema(req.body);
        await data.save();
        return res.status(200).json("Appointment Added Successfully");
    }catch(error){
        return res.status(500).json(error.message+"appointment adding error");
    }
}

export const getAppointments = async(req,res)=>{
    try{
        const data = await AppointmentSchema.find({});
        return res.status(200).json(data);
    }catch(error){
        return res.status(500).json(error.message+"Error");
    }
}


export const updateAppointment = async(req,res)=>{
    try{
        const appointmentId = req.params.id;
        const updated = req.body.status;
        await AppointmentSchema.findByIdAndUpdate(appointmentId,{Status:updated});
        return res.status(200).json("Appointment updated Successfully");
    } catch{
        return res.status(500).json(error.message+"Error");

    }
}


export const getNoOfAppointments=async(req,res)=>{
    try{
        let result = await AppointmentSchema.countDocuments();
        return res.status(200).json({result});
    }catch(error){
        return res.status(500).json(error.message+"Error occured");
    }
}