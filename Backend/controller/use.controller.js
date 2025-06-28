import User from '../model/user.model.js'
import bcrypt from 'bcrypt'

export const signup=async(req,res)=>{
  try {

      const {fullname,email,password}=req.body;
    const user=await User.findOne({email})
    if(user){
        return res.status(409).json({message:"user aleardy exists"})
    }

       const hasePassword=await bcrypt.hash(password,10)

    const createdUser=new User({
        fullname,
        email,
       password:hasePassword
    })
    
    await createdUser.save()
    res.status(200).json({message:'user created succesfully',user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },})
     console.log(createdUser);
     

  } catch (error) {
    console.log("ERROR in user controller",error);
    res.status(500).json({message:"internal server error"});
    
  }
}

export const login=async(req,res)=>{
  try {
    const {email,password}=req.body;

    const user=await User.findOne({email})
    console.log(user);
    
      const isMatch= await bcrypt.compare(password,user.password)
    if(!User || !isMatch)
    {
      return res.status(400).json({message:"Invalid user credintal"})
    }else{
      res.status(200).json({
        message:"Login Succesful",user:{
          _id:user._id,
          fullname:user.fullname,
          password:user.password
        }
      })
    }

  } catch (error) {
    console.log("ERROR ! in user controller login ",error);
    res.status(500).json({message:"internal server error"});
    
  }
}