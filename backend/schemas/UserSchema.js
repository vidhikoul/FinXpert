const {Schema}=require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema=new Schema({
    email:{
        type:String,
        required:[true,"Your Email Addressed is required"],
        unique:true,
    },
    username:{
        type:String,
        required:[true,"Your Username is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Your Password is required"]
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }

});
UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });

module.exports={UserSchema};