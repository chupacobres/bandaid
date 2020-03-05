const router = require("express").Router();
const bandaidController = require("../../controllers/bandaidController");
// Matches with "/api/bands"
router.route("/")
  .get(bandaidController.findAll)
  .post(bandaidController.create);
// Matches with "/api/bands/:id"
router
  .route("/:id")
  .get(bandaidController.findById)
  .put(bandaidController.update)
  .delete(bandaidController.remove);
module.exports = router;