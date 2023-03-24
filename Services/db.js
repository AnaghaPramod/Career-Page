//import mongoose
const mongoose = require('mongoose');

//define the conection string
mongoose.connect('mongodb://localhost:27017/career')
  .then(() => console.log('Connection to database successful'))
  .catch((error) => console.log('Error connecting to database:', error));


//create a model for the page
const Page = mongoose.model('Page',{
    //schema creation
    id:Number,
    category_id:Number,
    category_name:String,
    location:String,
    title:String,
    description:String,
    
})
module.exports={
    Page
}