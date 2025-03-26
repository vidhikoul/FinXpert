const {model}=require("mongoose");
const {OrderSchema} =require("../schemas/OrdersSchema.js");

const OrderModel=new model("order",OrderSchema)

module.exports={OrderModel};