import 'dotenv/config';
import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/uploadRoutes.js"
const app = express();
app.use(express.json({
    limit :"20kb"
}));
app.use(cors());
app.get("/" , (req , res)=>{
    res.send("hi there")
})
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use("/upload" , uploadRoutes)
app.listen(3000,()=>{
    console.log("Server is running at port : " + 3000)
})