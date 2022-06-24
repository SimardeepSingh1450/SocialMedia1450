const express =require('express')
const router=express.Router()
const db=require('../config/db')

router.post('/register',(req,res)=>{
    // const username=req.body.username
    // const password=req.body.password
    const {username,password}=req.body;

    db.query('INSERT INTO users (username,password) VALUES (?,?);',[username,password],(err,result)=>{
        console.log(err);
        res.send(result);
    })
})

router.post('/login',(req,res)=>{
    // const username=req.body.username
    // const password=req.body.password
    const {username,password}=req.body;

    db.query('SELECT * FROM users WHERE username=?',
    username,
    (err,result)=>{
        if(err){
        console.log(err);
        }
        if(result.length>0){
            console.log(result[0]);
            if(password==result[0].password){
                res.json({
                    loggedIn:true,
                    username:username
                })
            }
        else{
            res.json({
                loggedIn:false,
                message:"Wrong username/password"
            })
        }
    }else{
        res.json({
            loggedIn:false,
            message:"User Doesn't Exist"
        })
    }

        // res.send(result)
    })
})

module.exports=router;