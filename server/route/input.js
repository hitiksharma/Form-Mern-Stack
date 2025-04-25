const express = require('express');

// creating a mini express app called router(export it to use index.js)
const router = express.Router();

// importing task model interaction with db
const Schema = require('../model/schema');
//const app= express();
//Get API

router.get('/',async(req,res)=>{
    const data = await Schema.find();  // use to get all the schema info from mongo db
    res.json(input); //response as a json response to frontend
});

// Post API

router.post('/', async(req,res)=>{
    try{
    const input= new Schema({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
    });  // fetchung data from frontend
    
    const saved = await input.save(); // create new schema save in database
    res.json(saved); // send abck the same schema but with a id
    }
    catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// runing Get and Post function

//app.use('api/input', require('./route/input'));

// module export router instead of calling the script
module.exports = router;