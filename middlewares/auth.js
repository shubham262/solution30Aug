const jwt=require("jsonwebtoken")
const db=require("../models")
const User=db.USERS

exports.auth=async(req,res,next)=>{

try {
    const token=req.headers['x-access-token'];

    if(!token){
        res.status(400).json({error:"User is unauthoriseded"})
    }
    else{
        const result=jwt.verify(token,process.env.SECRET)
        const user=await User.findByPk(result.id)

        req.user=user
        next()


    }
} catch (error) {
    console.log(error)
    res.status(400).json({error:"Something wwerntgnbttrknrbtf"})

}
}
exports.checkAdmin=async(req,res,next)=>{

try {
    if(!req.user.isAdmin){

        res.status(400).json({error:"User is not admiun"})
    
    }
    else{
        next()
    }
      
} catch (error) {
    console.log(error)
    res.status(400).json({error:"Something wwerntgnbttrknrbtf"})


}


}