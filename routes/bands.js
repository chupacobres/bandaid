const router = require("express").Router();

  //GET api/bands , get band info , private

  router.get("api/all/:search", function (req, res) {
    db.bandaid.find(
      { genre: req.params.search },
      (err, found) => err ? console.log(err) : res.json(found)
    );
  });

  
module.exports = router;