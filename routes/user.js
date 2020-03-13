const express = require('express');
const router = express.Router();

const User = require('../models/User');


// Route: POST endpoint:api/users, to register user, public access
router.post('/',
	[
		// check('name', 'Name is required')
		// 	.not()
		// 	.isEmpty(),
		check('email', 'Please include a valid email').isEmail(),
		check(
			'password',
			'Please enter a password with 6 or more characters'
		).isLength({ min: 6 })
  ],
   async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

    const { name, email, password } = req.body;
    
    try {
			let user = await User.findOne({ email });

			if (user) {
				return res.status(400).json({ msg: 'User already exists' });
			}

			user = new User({
				// name,
				email,
				password
      });
      
      await user.save();

    } catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
