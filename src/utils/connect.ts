import mongoose from "mongoose";
import config from "config"

export default async function connect() {
    const dbUri=config.get<string>("dbUri")
    try{
        mongoose.connect(dbUri)
        console.log("DB Connected!")
    }catch(error){
       console.log(error)
       process.exit(0)
    }
    
}