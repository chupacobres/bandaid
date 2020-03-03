const router = require("express").Router();
const bandaidRoutes = require("./bands");
// Band routes
router.use("/bands", bandaidRoutes);
module.exports = router;