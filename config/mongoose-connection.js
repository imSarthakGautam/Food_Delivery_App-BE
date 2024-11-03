//1. require mongoose
const mongoose= require('mongoose');

//install config package
const config= require('config')

//debugger : npm i debug
const debuger = require('debug')('development:mongoose');


//2. connect mongoose
mongoose.connect(`${config.get("MONGODB_URI")}/foodDelivery`)
.then(()=>{
    debuger('connected')
})
.catch((err)=>{
    debuger('error:'+ err);
})

module.exports= mongoose.connection;