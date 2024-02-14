import multer from "multer";
import path from "path";

const fsStorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve("Uploaded CSV Files"));
    },
    filename:(req,file,cb)=>{
        const nameofUploadedFile=Date.now()+'-'+file.originalname;
        cb(null,nameofUploadedFile);
    }
});

export const fileUpload=multer({storage:fsStorage});