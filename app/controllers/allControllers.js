// const bcrypt = require('bcrypt');
const {User} = require('../models/User.js');
const {Chart} = require('../models/Chart.js');


module.exports.loginController = async (req, res) =>{
    try{
        return res.status(200).json({ message : "Test"});
    }catch(err){
        console.log(err);
        return res.status(500).json({
            message : "Internal Server Error"
        })
    }
}