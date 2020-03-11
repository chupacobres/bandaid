const router = require("express").Router();
const bandaidRoutes = require("./bands");
// Band routes
router.use("/bands", bandaidRoutes);

router.get("/all/:search", function (req, res) {
    db.bandaid.find(
      { genre: req.params.search },
      (err, found) => err ? console.log(err) : res.json(found)
    );
  });
module.exports = router;