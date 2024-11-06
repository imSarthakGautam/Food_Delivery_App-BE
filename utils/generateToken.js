const jwt = require('jsonwebtoken')

const generateToken = (user)=>{

    return jwt.sign({
        email: user.email,
        id: user._id
        },

        process.env.JWT_KEY,

        {expiresIn: '2h'} 
    );

}

//setting default export
module.exports.generateToken = generateToken




/*Note:

module.exports is object,
here generateToken becomes property of module.exports

-------C A S E   1 -------------------
module.exports.generateToken = generateToken
------access-------------
const tokenUtils = require('./path/to/this/file');
const token = tokenUtils.generateToken(user);

or by destructuring
const { generateToken } = require('./path/to/this/file');
const token = generateToken(user);



-------- C A S E   2----------
module.exports = generateToken
-----ACCESS directly--------
const generateToken = require('./path/to/this/file');
const token = generateToken(user);

*/
