const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//bring password for jwt from default.json:
const config = require('config')
//npm install --save express-validator
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

//route POST endpoint: api/users
router.post('/', [
    check('name', 'Please enter name').not().isEmpty(),
    check('email', 'Please enter valid email').isEmail(),
    check('password', 'Please enter password').isLength({ min: 6 })
],
    async (req, res) => {
        // res.send('Register a user');
        // res.send(req.body);
        const errors = validationResult(req); //validator

        //if errors
        if (!errors.isEmpty()) {
            //return 400 bad request with errors
            return res.status(400).json({ errors: errors.array() });
        }
        // res.send('passed'); //test Postman
        //destructuring from req.body
        const { name, email, password } = req.body;

        try {
            //find user based on field
            let user = await User.findOne({ email: email });

            if (user) {
                return res.status(400).json({ msg: 'User already exists' });
            }
            //using user created above to make a new instance to save to DB
            user = new User({
                name, email, password
            })
            //encrypting password with bcrypt
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save(); //save to mongoDB Atlas

            //object we want to send in the token to access all the contacts
            //the payload is the part of transmitted data 
            //that is the actual intended message.
            const payload = {
                user: {
                    id: user.id
                }
            }

            // res.send('User saved in Database!!!') //test Postman

            //add secret 
            jwt.sign(payload, config.get('jwtSecret'), {
                expiresIn: 360000
            },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token }); //token includes user's id
                }

            )
        } catch (err) {
            console.error(err.message); //
            res.status(500).send('Server error!!!')
        }
    });

module.exports = router;