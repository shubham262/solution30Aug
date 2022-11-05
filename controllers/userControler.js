const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const db=require('../models')
const User=db.USERS;


exports.signUp=async(req,res)=>{
try {
    
  

    let {name,email,password,isAdmin}=req.body
    
    password=await bcrypt.hash(password,10);
    isAdmin=isAdmin||false
    
    await User.create({name,email,password,isAdmin})
    res.status(400).json({message:"User created"})


} catch (error) {
    console.log(error)
    res.status(400).json({message:"Something went wrong",error:error})
}
}




//login
exports.login=async(req,res)=>{

try {

    const {email,password}=req.body
const user=await User.findOne({where:{email:email}});

if(user==null){
    res.status(400).json({error:"Invalid Username or Password"})
}
else{
   
    let valid=await bcrypt.compare(password,user.password)
    if(valid){
        let token=jwt.sign({id:user.id},process.env.SECRET);
        res.status(200).json({token:token})

    }
    else{
        res.status(400).json({error:"Not valid"})
    }

}
    
} catch (error) {
    console.log(error)
    res.status(400).json({error:"Something wrong happende"})
}
}