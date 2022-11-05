// {getAllbooks,createBook,delretrent,getResntsByUser}

const db=require('../models')
const User=db.USERS;
const Book=db.BOOKS

exports.createBook=async(req,res)=>{

try {
    let {name,author,publishedOn}=req.body

    publishedOn=publishedOn||Date.now()

    await Book.create({name,author,publishedOn})
    res.status(200).json({message:"Book is added"})
} catch (error) {
    console.log(error)
    res.status(400).json({message:"Something went wroing"})
}
}

exports.getAllbooks=async(req,res)=>{

  try {
    const books=await Book.findAll();
    res.status(200).json({Books:books})

  } catch (error) {
    console.log(error)
    res.status(400).json({message:"Something went wroing"})
  }

}



exports.getResntsByUser=async(req,res)=>{

   try {
    const {userId}=req.params

    const books=await Book.findAll({where:{rentedBy:userId}})
    res.status(200).json({Books:books})
   } catch (error) {
    console.log(error)
    res.status(400).json({message:"Something went wroing"})

   }

}


exports.delretrent=async(req,res)=>{

try {
    
    let del=req.query.delete
    let rent=req.query.rent
    let retur=req.query.return
    
    if(del){
    
    let isbnNo=req.body.isbnNo
    let book=await Book.findByPk(isbnNo)
    
    
    if(book&&book.rentedBy===0){
        await Book.destroy({where:{isbnNo:isbnNo}})
        res.status(200).json({message:"Book deleted"})
    
    }
    else{
        res.status(400).json({message:"Book is rented by someone"})
    }
    
    }
    
    //rent
    else if(rent){
    
        let {userId,isbnNo}=req.body
        let book=await Book.findByPk(isbnNo)
    
        if(book&& book.rentedBy==0){
            const books=await Book.findAll({where:{rentedBy:userId}})
    
            if(books.length<2){
                await Book.update({rentedBy:userId},{where:{isbnNo:isbnNo}})
                res.status(200).json({message:"Book is rented"})
    
            }
            else{
                res.status(400).json({message:"Book limit exceededed"})
    
            }
        }
        else{
            res.status(400).json({message:"Book has been already rented"})
    
        }
    
    
    }
    else if(retur){
    
        let {isbnNo}=req.body
        await Book.update({rentedBy:0},{where:{isbnNo:isbnNo}})
        res.status(200).json({message:"Book has been  returned"})
    
    
    
    }
    else{
        res.status(400).json({error:"Please provode proper parametes"})
    }
    

} catch (error) {
    console.log(error)
    res.status(400).json({message:"Something went wroing"})

}
}

