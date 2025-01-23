import Mongoose from 'mongoose';
export const doctorSchema=new Mongoose.Schema({
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
    Speciality:{
        type:String
    },
    Blood:{
        type:String
    },
    Status:{
        type:String
    },
    User:{
        type:String
    },
    Image:{
        data:Buffer,
        contentType:String
    },
    Fees:{
        type:String
    },
    Img:{
        type:String
    }
},{
    timestamps:true
}) 
const schema = new Mongoose.model('Doctor',doctorSchema);
export default schema;