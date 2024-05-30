const express=require("express");
const app=express();

app.get("/a",()=>{
    console.log("hello");
})