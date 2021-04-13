const User = require('../models/users');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const dotenv = require('dotenv');
dotenv.config();


const schemaRegister = Joi.object({
    FirstName: Joi.string().min(3).max(255).required(),
    LastName: Joi.string().min(3).max(255).required(),
    phoneNumber: Joi.number().min(6).required(),
    email: Joi.string().min(6).max(1024).required().email(),
    password: Joi.string().min(6).max(1024).required(),
})


exports.register = async (req, res) => {
    const {FirstName, LastName, phoneNumber, email, password}= req.body



    const { error } = schemaRegister.validate(req.body)
    
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }


    const isEmailExist = await User.findOne({ email: email });
    if (isEmailExist) {
        return res.status(400).json({error: 'Email ya registrado'})
    }

    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const shaPass = await bcrypt.hash(password, salt);



    const user = new User({
        FirstName: FirstName,
        LastName: LastName,
        phoneNumber: phoneNumber,
        email: email,
        password: shaPass,
    });
    try {
        const savedUser = await user.save();
        res.header('auto_token', token).json({
            error: null,
            data: savedUser,
            token : token,
        })
    } catch (error) {
        res.status(400).json({error})
    }
}


//////LogIn/////////


const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})



exports.login = async (req, res) => {
    const { email, password}= req.body

    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(password, user.password ,function (){

        if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })

       return res.json({error: null,data: 'exito bienvenido'})
    });
    

    // create token
    
    return res.header('auto_token', token).json(token);
}


const token = jwt.sign({id: this._id}, process.env.TOKEN_SECRET)

// exports.forgetpassword = async (req, res, next)=>{
//     const{email}= req.body;
//     try {
//         const user = await User.findOne({email});

//         if(!user){
//             return res.status(404).send("email cloud not be sent")
//         }

//     } catch (error) {
        
//     }
// }