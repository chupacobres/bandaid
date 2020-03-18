const express = require('express');
const router = express.Router();


//GET all bands RESULTS
router.get('/bands', function (req, res) {
    banddb.find(
      {},
      (err, found) => err ? console.log(err) : res.json(found)
    );
  });
  
//route GET endpoint: api/bands
// get all of the user's bands
//private
router.get('/bands/genre/:genre', function (req, res) {
    banddb.find(
        { genre: req.params.genre },
        (err, found) => err ? console.log(err) : res.json(found)
    );
});

//GET one band by id to... RESULTS
router.get('/bands/:id', function (req, res) {
    banddb.findOne(
        { id: req.params._id },
        (err, found) => err ? console.log(err) : res.json(found)
    );
});


//route POST endpoint: api/bands
// Add new bands
//private
router.post('/bands/add', function (req, res) {
    // console.log("POST req for SignUpForm", req.body)
    banddb.create(req.body,
        (err, found) => err ? console.log(err) : res.json(found)
    );
});

//route PUT endpoint: api/bands 
//update bands
//private
router.put('/:id', (req, res) => {
    res.send('Update contact');
});

//route DELETE endpoint: api/bands  
//delete bands
//private
router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});


module.exports = router;