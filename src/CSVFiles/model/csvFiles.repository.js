import {csvFileModel} from "./csvFiles.schema.js";

export const addFileModel=async(fileData)=>{ 
    return await new csvFileModel(fileData).save();
}

export const getAllFilesModel=async()=>{
    return await csvFileModel.find();
}

export const getFileByNameModel=async(fileName)=>{
    return await csvFileModel.findOne(fileName);
}