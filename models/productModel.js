//1. require mongoose
const mongoose= require('mongoose');

//2. connect mongoose
mongoose.connect('mongodb://127.0.0.1:27017/foodDelivery')

//3. schema creation
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

//4. export module
module.exports= mongoose.model('product', productSchema);
