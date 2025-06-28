import mongoose from 'mongoose'

const connectDB=async(req,res)=>{
  try {
    const connectionInstance= await mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }); 
    console.log(`MONGODB connected succesfully !! DB host: ${connectionInstance.connection.host}`);
    
  } catch (error) {
    console.log("ERROR ! on connecting DB #:",error).json(401)
    
  }
}

export default connectDB