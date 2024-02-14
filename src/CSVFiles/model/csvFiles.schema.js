import mongoose from "mongoose";

const csvFileSchema=mongoose.Schema({
    fileName:{
        type:String,
        required:true
    },
    fileLocation:{
        type:String,
        required:true
    }
});

export const csvFileModel=mongoose.model("CSVFileInfo",csvFileSchema);