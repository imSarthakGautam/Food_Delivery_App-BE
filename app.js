const express= require('express')
const app= express();

//db connection------------
const db= require('./config/mongoose-connection')

//require routes-----------
const ownersRouter= require('./routes/ownersRouter')
const usersRouter= require('./routes/usersRouter')
const productsRouter= require('./routes/productsRouter.js')

const cookieParser= require('cookie-parser')
const path= require('path')

//-------MIDDLEWARES---------
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')


//--------ROUTES------------
app.use('/owners', ownersRouter)
app.use('/products', productsRouter)
app.use('/users', usersRouter)


//-----------LISTENING TO APP-------------
const port= 3000;
app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
})