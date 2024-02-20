import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
import  {errorHandler } from "../utils/error.js"; 
import  {verifyToken } from "../utils/verifyUser.js";

export const signup = async (req,res) =>{
   
    const {username,email,password}=req.body;
    if(!username||!email||!password|| username ===''||password===''){
        return res.status(400).json({message: 'All field are required'})
    }
    const hashedpassword = bcryptjs.hashSync(password,10);
    const newuser = new User({
        username,
        email,
        password:hashedpassword 
    });
    try {
        await newuser.save();
        res.json('signup succesfull')
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

export const signin = async(req,res,next)=>{
 const {email,password} = req.body;
    if(!email||!password|| email ===''||password===''){
        return res.status(400).json({message: 'All field are required'})
    }
    try {
        const validUser = await User.findOne({email})
        if(!validUser){
           return next(errorHandler(404,'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password,validUser.password);
        if(!validPassword ){
            next(errorHandler(404,'invalid passowrd'));
        }
      const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET) 
      const {password: pass, ...rest}  = validUser
      res
       .status(200)
       .cookie('access_token',token,{
        httpOnly:true}).json(validUser);
    } catch (error) {
        next(error);
    }
}