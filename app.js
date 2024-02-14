import express from "express";
import dotenv from "dotenv";
import path from "path";
import {getHomePageController,addFileController,getAllFilesController,getFileContentsController} from "./src/CSVFiles/controller/csvFiles.controller.js";
import {fileUpload} from "./middlewares/fileUpload.middleware.js";

export const appServer=express();
const envVarPath=path.resolve("config","CSV_Upload.env");
dotenv.config({path:envVarPath});

appServer.set("view engine","ejs");

appServer.get('/',getHomePageController);
appServer.get('/listofcsvfiles',getAllFilesController);
appServer.get('/filecontent/:fileName',getFileContentsController);

appServer.post('/',fileUpload.single("csvFile"),addFileController);


