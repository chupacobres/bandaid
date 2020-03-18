const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//bring password for jwt:
const config = require('config')
//npm install --save express-validator
const { check, validationResult } = require('express-validator');

const User = require('../models/User');


//route GET endpoint: api/auth ---------------------------------------------
//Get logged in user
//private

router.get('/', (req, res) => {
    //route POST auth user and get token, public
    res.send('Get logged in user');
});



//route POST endpoint: api/auth ---------------------------------------------
//Auth user and get token
//public
//requires middleware to compare token
router.post('/',

    [
        check('email').isEmail(), //validator
        check('password').exists(),//validator
    ],
    async (req, res) => { //async for Mongoose and bcrypt
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            //return 400 bad request
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            let user = await User.findOne({ email }) //returns promise with...

            if (!user) { //if user email doesn't exists
                return res.status(400).json({ msg: 'email not found or invalid credential' })
            }

            //if there is a user , use the bcrypt compare method to compare with user password
            const isMatch = await bcrypt.compare(password, user.password)
            //return true or fontVariantAlternates: 

            if (!isMatch) { //if password doesn't match
                return res.status(400).json('Password doesn\'t match')
            }

            const payload = {
                user: { id: user.id } ///...the user's id
            }
            jwt.sign(payload, config.get('jwtSecret'), //passing into jwt wit the secret 
                {
                    expiresIn: 360000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token }); //token includes user's id !
                }
            );
        } catch (err) {
            console.error(err.message); //
            res.status(500).send('Server error');
            // res.send('Log in user');
        }
    }
);





module.exports = router;