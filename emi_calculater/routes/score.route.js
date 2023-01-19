const express = require("express");
const scoreRouter=express.Router()
const fs=require("fs")
const dotenv=require("dotenv");
const { ScoreModel } = require("../models/ScoreModel");





scoreRouter.get("/",async(req,res)=>{
        const data=await ScoreModel.find().limit(10)
        res.send({"data":data,"msg":"hi"})
   
   
})

scoreRouter.get("/getrendom",async(req,res)=>{


    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        function generateString(length) {
            let result = ' ';
            const charactersLength = characters.length;
            for ( let i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

              return result;

         }
         let num=Math.floor(Math.random() * (10 - 7) + 7)

         let a=generateString(num)

        res.send({"string":a.toLocaleLowerCase(),"msg":"Here is your random word"})
   
   
})

scoreRouter.post("/adduser",async(req,res)=>{
    const {name,level,score}=req.body
    
    const new_score= new ScoreModel({
      name,
      score,
      level
    })
    await new_score.save()

    res.send({new_score})
})

scoreRouter.post("/updatescore",async(req,res)=>{
    const {score}=req.body
    console.log(score)
    
    // const new_score= new ScoreModel({
    //   name,
    //   score,
    //   level
    // })
    // await new_score.save()

    res.send({"new_score":"ki"})
})


module.exports={scoreRouter}