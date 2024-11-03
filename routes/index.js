const express = require('express')
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index')
})

//exporting router object
module.exports = router;
