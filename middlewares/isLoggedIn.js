const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

module.exports = async (req, res, next)=>{

//check if token/cookie is present-- i.e. logged in
if (!req.cookies.token){
    req.flash('error', 'you need to login first')
    return res.redirect('/')
}

try {
    let decoded_token = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel
        .findOne({email : decoded_token.email})
        .select('-password')
        //no password
    
    // add user details in req for middleware- using functions
    req.user= user;
    next()



} catch (err) {

    req.flash('error', 'you need to login first')
    res.redirect('/')
}

// verify the cookie via jwt
}