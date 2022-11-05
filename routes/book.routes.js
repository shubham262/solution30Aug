const {getAllbooks,createBook,delretrent,getResntsByUser}=require('../controllers/bookController')
const {auth,checkAdmin}=require('../middlewares/auth')
const  routes=(app)=>{

app.get('/book/list',auth,getAllbooks);

app.post('/book/create',auth,checkAdmin,createBook);

app.post('/book',auth,checkAdmin,delretrent);

app.get('/rented/:userId',auth,getResntsByUser);


}
module.exports=routes