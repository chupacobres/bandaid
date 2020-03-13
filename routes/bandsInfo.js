const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


  //GET api/bands , get your band info , private
router.get('/',(req,res) => {
  res.send('Get band info')
});
  //POST api/bands , add band, private
router.get('/',(req,res) => {
  res.send('Add band')
});

  //PUT api/bands/:id , update band , private
router.put('/:id',(req,res) => {
  res.send('Update band')
});

  //DELETE api/bands/:id , update band, private
router.delete('/:id',(req,res) => {
  res.send('Delete band ')
});

  
module.exports = bandsInfo;