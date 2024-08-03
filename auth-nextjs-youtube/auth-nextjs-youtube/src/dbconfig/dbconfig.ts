import mongoose from 'mongoose';

  export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("MONGODB connected successfully");
         })

         connection.on('error',(error) =>{
            console.log("MongoDB connection error.Please make sure that MongoDB is connected"+error);
            process.exit();
          }
        )
    
    }catch(error){
     console.log("Something went wrong");
     console.log(error);
    
    }
 
 
 
 }