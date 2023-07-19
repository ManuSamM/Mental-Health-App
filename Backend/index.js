const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose');
const Item = require('./models/taskModel')
const cors = require('cors')

mongoose.connect('mongodb+srv://manusam9999:kZsFyb9HmHILafc2@cluster0.z8zl0mq.mongodb.net/').then(() => {
  console.log('Mongodb connected successfully')
});

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  Item.
});

app.post("/", (req, res) => {
  
});

app.listen(PORT, () => {
  console.log("Listening on port:" + PORT);
});