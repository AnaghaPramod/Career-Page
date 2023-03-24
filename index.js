//import express
const express = require('express');

//import cors
const cors = require('cors');

//import dataService
const dataServices = require('./Services/dataServices');
const { json } = require('express');
const { Page } = require('./Services/db');

//create an application using express 
const app = express();

//use json parser for server responses

app.use(express.json())
//using cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))

//setup a port number
app.listen(3000,()=>{
    console.log('listening on port:3000');
})

//API call to get all
app.get('/all-pages',(req,res)=>{
    dataServices.getPages().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})