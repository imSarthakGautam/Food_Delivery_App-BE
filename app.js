const express= require('express')
const app= express();

//db connection------------
const db= require('./config/mongoose-connection')

//require routes-----------
const index= require('./routes/index')
const ownersRouter= require('./routes/ownersRouter')
const usersRouter= require('./routes/usersRouter')
const productsRouter= require('./routes/productsRouter.js')
const expressSession = require('express-session')
const flash = require('connect-flash')
const cookieParser= require('cookie-parser')
const path= require('path')

//loads environment variables from .env file to process.env 
require('dotenv').config();

//-------MIDDLEWARES---------
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
//configuring session management by using express-session middleware
app.use(
    expressSession({
        resave: false,
        saveUninitialized : false,
        secret : process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash())

app.set('view engine', 'ejs')



//--------ROUTES------------
app.use('/', index)
app.use('/owners', ownersRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)


//-----------LISTENING TO APP-------------
const port= 3000;
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})