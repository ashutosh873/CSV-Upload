import path from "path";
import {addFileModel,getAllFilesModel,getFileByNameModel} from "../model/csvFiles.repository.js";
import fs from "fs";

export const getHomePageController=(req,res,next)=>{
    res.status(200).sendFile(path.resolve("src","CSVFiles","views","CSVUploadHomePage.html"));
}

export const getAllFilesController=async(req,res,next)=>{
    try{
        const UploadedFilesReceived=await getAllFilesModel();
        if(UploadedFilesReceived.length){
            res.status(200).render(path.resolve("src","CSVFiles","views","ListOfCSVFiles"),{files:UploadedFilesReceived});
        }else{
            res.status(200).render(path.resolve("src","CSVFiles","views","ListOfCSVFiles"),{files:null});
        }
    }catch(err){
        res.status(500).sendFile(path.resolve("src","CSVFiles","views","CSVUploadHomePage.html"));
    }
    
}

export const addFileController=async(req,res,next)=>{
    const fileName=req.file.filename;
    const fileLocation=req.file.destination;
    const fileData={fileName,fileLocation};
    try{
        const isfileAdded=await addFileModel(fileData);
        if(isfileAdded){
            res.status(201).redirect("/listofcsvfiles");
        }else{
            res.status(400).sendFile(path.resolve("src","CSVFiles","views","CSVUploadHomePage.html"));
        }
    }catch(err){
            res.status(500).sendFile(path.resolve("src","CSVFiles","views","CSVUploadHomePage.html"));
    }
}

export const getFileContentsController=async(req,res,next)=>{
    const {fileName}=req.params;
    try{
        const fileDetails=await getFileByNameModel({fileName});
        const filePath=path.resolve(fileDetails.fileLocation,fileDetails.fileName);
        const fileData=fs.readFileSync(filePath)
        .toString()
        .split('\n')
        .map(line=>line.trim())
        .map(line=>line.split(',').map(word=>word.trim()));
        res.status(200).render(path.resolve("src","CSVFiles","views","CSVFileContents"),{filename:fileDetails.fileName,
        filedata:fileData});

    }catch(err){
        res.status(500).send("Internal Server Error");
    }
}