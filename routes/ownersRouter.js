const express = require('express')
const router= express.Router();

const ownerModel = require('../models/ownerModel')

router.get('/', (req,res)=>{
    res.send('hey')
})

//check the environment
console.log(process.env.NODE_ENV)

//if route to be run only in development phase then
if(process.env.NODE_ENV==='development'){
    router.post('/create', async (req,res)=>{
    let owners = await ownerModel.find()
    if (owners.length>0) {
    return res
        .status(503)
        .send(`You don't have permission to create new owner`)
    }
    let {fullname, email, password} = req.body;
    let createdOwner= await ownerModel.create({
        fullname,
         email,
         password,
    })
    res.status(201).send(createdOwner)
    //res.send('you can create a new owner')
})
}

router.get('/create',(req,res)=>{
    res.send('inside owner create')
})

module.exports = router