const mongoose = require ('mongoose')
mongoose.connect('mongodb://localhost:27017/Signup',{})
const Signup=mongoose.Schema
const Schema= new Signup(
    {
        Username:{type:String},
        Email:{type :String},
        Password:{type:String}
    }
)
var Model=mongoose.model('User_data',Schema)
module.exports=Model
