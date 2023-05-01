const express = require("express");

const app = express();

const mongoose = require("mongoose");

const User = require("./model/user");

require("dotenv/config")

app.use(express.json());

app.get('/',(req , res) =>
{
    res.send("Listening");

})

app.get('/users',(req , res) =>
{
    let users = ["Wajahat","Azad","Hussain"]
    res.send({
        users: users,
    });
});    


app.post('/create_user', async (req,res) =>{
    try{
        const myuser = new User(req.body); 
        await myuser.save();
    res.send(myuser);
    }catch(err){
        res.send({message: err});
    }
})    


mongoose.connect(
    process.env.DB_CONNECT,
    (req,res) =>{
        console.log("Connected to database");
    })
app.listen(3000,()=>{
    console.log("Listening to 3000")
});
