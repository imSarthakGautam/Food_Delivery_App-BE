const express = require('express')
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn')
const productModel = require('../models/productModel')
const userModel= require('../models/userModel')
const {cartCalculations} = require('../utils/cartCalculations')

router.get('/', (req,res)=>{
    let error = req.flash('error');
    res.render('index', {error, loggedIn: false})
})

router.get('/shop', isLoggedIn, async (req,res)=>{

    //find the products available
    let products = await productModel.find()
    //sucess retrieve from flash
    let success= req.flash('success')
    res.render('shop', {products, success})
})

router.get('/cart', isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({ email: req.user.email }).populate('cart');
    let cartItems = user.cart.map(item => ({
        ...item.toObject(),
        quantity: item.quantity || 1, // Default to 1 if quantity isn't provided
    }));
    // Calculate price breakdown using utility function
    const priceBreakdown = cartCalculations(cartItems);
    res.render('cart', { cartItems, priceBreakdown });
});

router.get('/cart/bill', isLoggedIn, async (req,res)=>{
    console.log('inside cart bill')
    let user = await userModel.findOne({ email: req.user.email }).populate('cart');
    let cartItems = user.cart.map(item => ({
        ...item.toObject(),
        quantity: item.quantity || 1, // Default to 1 if quantity isn't provided
    }));
    // Calculate price breakdown using utility function
    const priceBreakdown = cartCalculations(cartItems);
    res.render('bill', { user, cartItems, priceBreakdown });
})

router.get('/order', isLoggedIn, async (req,res)=>{
    let user = await userModel.findOne({ email: req.user.email }).populate('cart');
    user.cart=[];
    await user.save()

    req.flash('success', 'Order Placed Successfully')
    res.redirect('shop')
})

router.get('/addtocart/:id', isLoggedIn, async (req,res)=>{
    //console.log(req.body)
    //console.log('user', req.user)
    let user = await userModel.findOne({email: req.user.email})
    console.log('foundUser', user)
    console.log(req.params)
    user.cart.push(req.params.id)
    await user.save();
    req.flash('success', "Added to cart");
    res.redirect('/shop')
    

    //find the products available
    // let products = await productModel.find()
    // res.render('shop', {products})
})

//router
//exporting router object
module.exports = router;
