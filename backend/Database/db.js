import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const connection=async()=>{
    

    const url=`mongodb://${USERNAME}:${PASSWORD}@ac-40oqcxx-shard-00-00.1onuat0.mongodb.net:27017,ac-40oqcxx-shard-00-01.1onuat0.mongodb.net:27017,ac-40oqcxx-shard-00-02.1onuat0.mongodb.net:27017/?ssl=true&replicaSet=atlas-wgohlr-shard-0&authSource=admin&retryWrites=true&w=majority"
`;
    try{
        await mongoose.connect(url);
        console.log("Connected");
    }catch(error){
        console.log(error.Message);
    }
}

export default connection;