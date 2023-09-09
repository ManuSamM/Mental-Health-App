import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import collection from "./models/collectionModel.js";

const app = express()
const PORT = 3000

mongoose.connect('mongodb+srv://manusam9999:kZsFyb9HmHILafc2@cluster0.z8zl0mq.mongodb.net/').then(() => {
  console.log('Mongodb connected successfully')
});

app.use(cors());
app.use(express.json());

app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(3000,()=>{
    console.log("Port connected");
})