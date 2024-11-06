const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {generateToken}= require('../utils/generateToken')

module.exports.registerUser = async (req,res)=>{
    try{
        let {email, fullname, password}= req.body;

        //check if email has been previously registered
        let user = await userModel.findOne({email});
        if (user) return res.status(401).send('You already have an account, please login')

        //encrypt the password
        bcrypt.genSalt(10, (err, salt)=>{
            bcrypt.hash(password, salt, async (err, hash)=>{
                if (err) return res.send(err.message);
                else {
                    let newUser = await userModel.create({
                        email,
                        password: hash,
                        fullname,
                    });

                    let token = generateToken(newUser)
                    res.cookie('token', token)
                    //res.send(`user-created-sucessfully', ${newUser}`);
                    res.redirect('/shop')

                }
            })

        })

    } catch (err){
    res.send(err.message)
    }
    //res.render('index')
}

module.exports.loginUser = async (req, res)=>{
    try{

        let { email, password}= req.body

        //check if user exists
    let user = await userModel.findOne({email});
    if (!user) return res.status(401).send(`You don't have an account, please signup`)

    //compare if password matches-- via bcrypt
    bcrypt.compare( password, user.password, (err, result)=>{
        if(result){
            //set token if password is correct
            let token = generateToken(user)
            res.cookie('token', token)
            //res.send('You can login')
            res.redirect('/shop')
        }
    })


    } catch (err){
        res.send(err.message)
    }


}

module.exports.logout = async (req, res)=>{
    try{

            res.cookie('token', '')
            res.redirect('/')

        } catch (err){
        res.send(err.message)
    }
}