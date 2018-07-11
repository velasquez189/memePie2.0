const router = require("express").Router();
const memeRoutes = require("./memeRoutes");

// Book routes
router.use("/memeRoutes", memeRoutes);

module.exports = router;