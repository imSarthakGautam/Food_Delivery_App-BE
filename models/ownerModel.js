//1. require mongoose
const mongoose= require('mongoose');

//2. schema creation
const ownerSchema= mongoose.Schema({
    fullname: {
       type: String,
       minLength: 3,
       trim: true

    },
    email: String,
    password: String,
   
    products: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
    gstin : Number,

});

//3. export module
module.exports= mongoose.model('owner', ownerSchema);
