//import db
const db=require('./db')


//get all details from db
const getPages=()=>{
    return db.Page.find().then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    pages:result
                }
            }else{
                return{
                    status:false,
                    statusCode:402,
                    message:'page not found'
                }
            }
        }
    )
}

module.exports={
    getPages
}