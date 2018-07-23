const router = require("express").Router();
const memeController = require("../../controllers/memeController");

router.route("/")
    .get(memeController.findFresh)
    .post(memeController.findFresh);

router.route("/fresh")
    .get(memeController.findFresh)
    .post(memeController.findFresh);

router.route("/dank")
    .get(memeController.findDank)
    .post(memeController.findDank);

router.route("/search")
    .get(memeController.findByTag)
    .post(memeController.findByTag);

router.route("/user")
    .get(memeController.findByUser)
    .post(memeController.findByUser)
    .delete(memeController.delete);

router.route("/:id")
    .delete(memeController.delete);
    
router.route("/upload")
    .post(memeController.create);

router.route("/like")
    .put(memeController.toggleLike);
    
router.route("/down")
    .put(memeController.downVote);


module.exports = router;  