const express = require('express');
const router = express.Router();
const {register , login} = require('../controllers/Auth');
const dashboadRoutes = require('../middleware/dashboard');
const verifyToken = require('../middleware/validate-token');

// route middlewares

router.get('/',verifyToken,dashboadRoutes);
router.post('/register', register);
router.post('/login', login);


module.exports = router;