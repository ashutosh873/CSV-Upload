import { appServer } from "./app.js";
import {connectDB} from "./config/db.js";

appServer.listen(process.env.APP_PORT,async(err)=>{
    if(err){
        console.log("Unable to start the application server due to following error -"+err);
    }else{
        console.log("Server is listening at port "+process.env.APP_PORT);
        const csvUploadDBInstance=await connectDB();

    }
});