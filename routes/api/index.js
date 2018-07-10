const router = require("express").Router();
const memeRoutes = require("./memeRoutes");

// Book routes
router.use("/meme", memeRoutes);

module.exports = router;