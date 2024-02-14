import mongoose from "mongoose";

export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Successfully connected to MongoDB database");
    }catch(err){
        console.log("Database connection failed with the following error - "+err);
    }
    
};


