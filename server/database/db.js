import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

const Connection = ()=>{
    const DB_URL = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-gx2nodh-shard-00-00.6qtbtyp.mongodb.net:27017,ac-gx2nodh-shard-00-01.6qtbtyp.mongodb.net:27017,ac-gx2nodh-shard-00-02.6qtbtyp.mongodb.net:27017/?ssl=true&replicaSet=atlas-nvu0ta-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        mongoose.connect(DB_URL,{useNewUrlParser:true});
        console.log("DB Connected Successfully");
    } catch (error) {
        console.log("Error while connecting "+ error.message)
    }
}

export default Connection;