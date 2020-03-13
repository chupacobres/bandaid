const router = require("express").Router();

  //GET api/bands , get band info , private
router.get('/',(req,res) => {
  res.send('Get band info')
});

  //PUT api/bands/:id , update band info , private
router.put('/:id',(req,res) => {
  res.send('Update band info')
});

  
module.exports = router;