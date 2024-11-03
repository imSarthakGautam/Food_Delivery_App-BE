const express = require('express')
const router= express.Router();
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/', (req,res)=>{
    res.send('hey')
})


router.post('/register',  (req,res)=>{
    try{
        let {email, fullname, password}= req.body;

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

                    //res.send(newUser)
                    let token = jwt.sign({email, id: newUser._id},
                                'secret_key',
                                {expiresIn: '2h'} 
                            );
                    res.cookie('token', token)
                    res.send(`user-created-sucessfully', ${newUser}`);

                }
            })

        })
        // jwt 
        //set cookie
        
        

    } catch (err){
    res.send(err.message)
    }
    //res.render('index')
})

//exporting router object
module.exports = router;

