const express = require("express");
const router = express.Router();
const { checkWatchList , addTowatchList } = require("../controllers")

/* GET users listing. */

router.post("/add-to-watch-list", addTowatchList);
router.get("/check-watch-list/:movieId" , checkWatchList)

module.exports = router;
