//1. require mongoose
const mongoose= require('mongoose');

//2. schema creation
const productSchema= mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    type: String,
    discount: {
        type: Number,
        default: 0,
    },
    bgColor: String,
    panelColor: String,

});

//3. export module
module.exports= mongoose.model('product', productSchema);