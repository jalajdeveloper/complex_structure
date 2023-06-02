import express from "express";
const router = express.Router();
import { checkWatchList , addTowatchList } from "../controllers"


/* GET users listing. */

router.post("/add-to-watch-list", addTowatchList);
router.get("/check-watch-list/:movieId" , checkWatchList)

module.exports = router;
