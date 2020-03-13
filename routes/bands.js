const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const bands = require("../models/Bands");


//GET api/bands , get all bands , public

router.get("api/all/:search", function (req, res) {
  db.bandaid.find(
    { genre: req.params.search },
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

module.exports = bands;