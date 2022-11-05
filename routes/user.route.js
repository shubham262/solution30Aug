const {signUp,login}=require('../controllers/userControler')

const  routes=(app)=>{

app.post('/user/create',signUp);

app.post('/user/login',login);


}
module.exports=routes