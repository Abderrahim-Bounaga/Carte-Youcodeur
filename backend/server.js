const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5001;
const users = require('./routes/Users');
const cors = require('cors')
const bodyParser = require('body-parser')




mongoose.connect('mongodb://localhost:27017/Youcoseur',{ useNewUrlParser: true,  useUnifiedTopology: true },(err , db)=>{
    if(db){
        console.log("db connected")
    }
    else{
        console.log('db not connected');
    }
})


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());
app.use('/user', users);


app.listen(PORT, ()=>{
    console.log("server connected "+ PORT)
});