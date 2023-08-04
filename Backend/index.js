import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import Item from "./models/taskModel.js";

const app = express()
const PORT = 3000

mongoose.connect('mongodb+srv://manusam9999:kZsFyb9HmHILafc2@cluster0.z8zl0mq.mongodb.net/').then(() => {
  console.log('Mongodb connected successfully')
});

app.use(cors());
app.use(express.json());

app.get("/get-data", (req, res) => {
  Item.find().then((data, err) => {
    return res.status(200).json({
      message: "Items fetched successfully!",
      items: data
    })
  })
});

app.post("/post-data", (req, res) => {
  
  const name = req.body.name;
  
  if (!name) {
    return res.status(400).json({
      message: "Content is a required field.",
    });
  }

  Item.create({
    name: name,
  }).then((data, err) => {
    return res.status(200).json({
      message: "Item added successfully!",
    });
  });
});

app.listen(PORT, () => {
  console.log("Listening on port:" + PORT);
});