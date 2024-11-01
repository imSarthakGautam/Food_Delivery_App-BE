//1. require mongoose
const mongoose= require('mongoose');

//2. connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/foodDelivery')

//3. schema creation
const userSchema= mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart :{
        type: Array,
        default: []
    },
    isAdmin : Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,

});

//4. export module
module.exports= mongoose.model('user', userSchema);
