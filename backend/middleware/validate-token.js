const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

// middleware to validate token (rutas protegidas)
const verifyToken =  (req, res, next) => {
    const auth_header = req.headers.authorization;
    let token= auth_header.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denegado' })
    
        
        jwt.verify(token, process.env.TOKEN_SECRET, (err, res) =>{
            if (err) {
                res.status(400).json({error: 'token no es válid'})
                
            }else {
                req.user = res
                next() // continuamos
            }
        })

}

module.exports = verifyToken;