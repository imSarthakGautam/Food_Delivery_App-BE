//1. require mongoose
const mongoose= require('mongoose');

//2. connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/foodDelivery')
.then(()=>{
    console.log('connected')
})
.catch((err)=>{
    console.log('error:'+ err);
})

module.exports= mongoose.connection;