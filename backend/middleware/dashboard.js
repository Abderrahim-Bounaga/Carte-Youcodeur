const User = require('../models/users')
module.exports = function(req,res,next) {
    User.find({})
      .then((Particip) =>{
        res.statusCode = 200;
        res.json(Particip)})
        .catch((err) => {console.log(err)})
}