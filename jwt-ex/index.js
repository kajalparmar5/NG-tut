const express=require('express')
const jwt=require('jsonwebtoken')

const app=express()

app.get("/",(req,res)=>{
    res.json({
        message:"hello"
    })
})
app.listen(5000,()=>{
    console.log("port 5000 is running")
})