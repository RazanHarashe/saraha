import userModel from "../../../../DB/Models/User.model.js"
import { asyncHandler } from "../../../Middleware/errorHandling.js"
import cloudinary from "../../../Services/cloudinary.js"

export const profile = asyncHandler( async(req,res,next)=>{
   if(!req.file){
    return next(new Error("please provide a file"));

   }

    const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{
        folder:`${process.env.APP_NAME}/user/${req.user._id}/profile`
    });

    const user = await userModel.findByIdAndUpdate(req.user._id,{profilePic:{secure_url,public_id}},{new:false});
    if(user.profilePic){
    await cloudinary.uploader.destroy(user.profilePic.public_id);
    }
  return res.json({message:user})
})

export const coverPic = asyncHandler( async(req,res,next)=>{
    if(!req.files){
        return next(new Error("please provide a file"));
    
       }
   
const coverPic =[];
   for (const file of req.files) {
    coverPic.push(file.dest);
    
   }
const user =await userModel.findByIdAndUpdate(req.user._id,
    {cover:coverPic},{new:true});
   return res.status(200).json({message:"success",user});
})