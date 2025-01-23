import Mongoose from "mongoose";
const appointment= new Mongoose.Schema({
    Name:{
        type:String
    },Age:{
        type:String
    },Gender:{
        type:String
    },MobileNo:{
        type:String
    },Address:{
        type:String
    },DoB:{
        type:String
    },Blood:{
        type:String
    },DoctorId:{
        type:String
    },Date:{
        type:String
    },Time:{
        type:String
    },Payment:{
        type:String

    }, DoctorName:{
        type:String
    }, DoctorSpeciality: {
        type:String
    }, Status:{
        type:String
    }, UserName:{
        type:String
    },Fees:{
        type:String
    }
})

const schema = new Mongoose.model('Appointment',appointment);
export default schema;