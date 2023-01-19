const mongoose = require("mongoose")

const scoreSchema=new mongoose.Schema({
    name:{type:String,required:true},
    level:{type:String,required:true},
    score:{type:Number,required:true},
})

const ScoreModel=mongoose.model("job",scoreSchema)


module.exports={ScoreModel}