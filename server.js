const express = require("express")

const app = express()


app.get("/",(req,res)=>{
    res.send({
        name:"/"
    })
})

app.get("/hello",(req,res)=>{
    res.send({
        name:"/hello"
    })
})

app.listen(4000,()=>{
    console.log("Server is connected")
})