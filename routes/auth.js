const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


//GET api/auth , Get logged in user , private 
router.get('/',(req,res) => {
    res.send('Get logged in user')
});

//POST api/auth , Auth user , public
router.post('/',(req,res) => {
    res.send('Log in user')
});

module.exports = auth;