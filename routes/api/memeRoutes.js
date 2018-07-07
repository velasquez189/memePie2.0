const router = require("express").Router();
const memeController = require("../../controllers/memeController");


router.route("/fresh")
    .get(memeController.findFresh)


router.route("/dank")
    .get(memeController.findDank);

router.route("/:tag")
    .get(memeController.findByTag);