import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const PORT = process.env.PORT || 3001 ;
const URL = 'mongodb+srv://sarnendu:rupu@cluster0.zqzj0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';



mongoose.connect(process.env.MONGO_CONNECTION_URL || URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true

},()=>{
    console.log("DB Connected");
})

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
    
})

const User= new mongoose.model('User',userSchema)

app.get("/",(req,res)=>{
    res.send("Connected");
})

app.post("/login",(req,res)=>{
    
    const {email, password}= req.body
    User.findOne({email:email},(err,user) =>{
        if(user){
          if(password===user.password){
              res.send({message:'Login Successfull',user:user})
          }
          else{
              res.send('password did not match')
          }
        }
        else {
            
            res.send('user not registerd')
        }
    })
})

app.post("/signup",(req,res)=>{
    const {name, email, password}= req.body
    User.findOne({email:email},(err,user) =>{
        if(user){
           res.send({message:"user"})
        }
        else {
            const user= new User({
                name,
                email,
                password
            })
            user.save(err =>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send('User Successfully Registerd')
                }
            })
        }
    })
})




app.listen(PORT,()=>{
    console.log("Backend Started At The Port 3001");
})