# Food_Delivery_App-BE

express
mongoose
jsonwebtoken
cookie-parser
bcrypt
multer
debug (debugger)
config
dotenv


- UserModel 
fullname,
email,
password
contact 
picture 

cart []
isAdmin
orders

product
-Image
-name
-price
-discount

-bgcolor
-panelColor
-textColor

```CMD
set DEBUG = development:*
set DEBUG= 
```

development.json- config file that consists specific settings 

```powershell
 $env:DEBUG='development:*'
 Remove-Item Env:DEBUG
```

set development environment:
```powershell
$env:NODE_ENV='development'
```
//it is stored in memory

process.env.NODE_ENV is an environment variable in Node.js that specifies the environment your application is currently running in.
Common values are development, test, and production
By setting process.env.NODE_ENV, you can control which configuration file is used by your app 

The` .env` file and `process.env` are closely related, as the 
`.env` file is used to set environment variables that `process.env` can access in a Node.js application.

Using a package like `dotenv` values in the `.env` file are loaded into `process.env` when the app starts.
```js
require('dotenv').config()
```
 

Routes:
/ signup/login
/shop -> shop

/users/cart -> cart
/admin -> admin panel

/owner/products -> show all products
/owner/admin -> show admin panel to create products