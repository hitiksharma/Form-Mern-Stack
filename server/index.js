// for initial configuration

const express = require('express');
const mongoose= require('mongoose');
const cors= require('cors');
require('dotenv').config();

// for creating instance of express as an app

const app= express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connect"))
.catch((err)=>console.log(err));

// Set up API routes
app.use('/api/input',require('./route/input'));

// Start server and listen
app.listen(5000,()=>console.log("Server running on  port 5000"));
