const {model}=require("mongoose");
const {PositionSchema} =require("../schemas/PositionSchema.js");

const PositionModel=new model("position",PositionSchema)

module.exports={PositionModel};