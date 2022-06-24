const express =require('express')
const router=express.Router()
const db=require('../config/db')


router.post('/',(req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    const image=req.body.image;
    const author=req.body.author;
    db.query('INSERT INTO uploads (title , description , image , author) VALUES (?,?,?,?);',[title,description,image,author],(err,result)=>{
        console.log(err);
        res.send(result);
    })
})


router.get("/",(req,res)=>{
    db.query("SELECT * FROM uploads",(err,result)=>{
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})


router.get("/byUser/:username",(req,res)=>{
    const userName=req.params.username;
   
    db.query("SELECT * FROM uploads WHERE author = ?;",userName,(err,result)=>{
        if(err){
            console.log(err)
        }
        res.send(result)
    })
})



module.exports=router;