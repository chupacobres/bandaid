const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

router.get("/all", function (req, res) {
  db.bandaid.find(
    {},
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

router.get("/all/:search", function (req, res) {
  db.bandaid.find(
    { genre: req.params.search },
    (err, found) => err ? console.log(err) : res.json(found)
  );
});

module.exports = router;