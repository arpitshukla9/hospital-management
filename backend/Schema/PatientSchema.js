import Mongoose from 'mongoose';
export const patientSchema=new Mongoose.Schema({
    Name:{
        type:String
    },
    Age:{
        type:String
    },
    Gender:{
        type:String
    },
    MobileNo:{
        type:String,

    },
    UserName:{
        type:String,
        required:true
    },
    Password:{
        type:String,

    },
    Address:{
        type:String
    },
    DoB:{
        type:String
    },
    Blood:{
        type:String
    },
    User:{
        type:String
    },
    Img:{
        type:String
    }
},{
    timestamps:true
}) 
const schema = new Mongoose.model('Patient',patientSchema);
export default schema;