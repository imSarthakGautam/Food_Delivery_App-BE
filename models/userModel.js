//1. require mongoose
const mongoose= require('mongoose');

//2. schema creation
const userSchema= mongoose.Schema({
    fullname: {
       type: String,
       minLength: 3,
       trim: true

    },
    email: String,
    password: String,
    cart :[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    }],
    
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,

});

//3. export module
module.exports= mongoose.model('user', userSchema);
