import express from "express";
const router = express.Router();
import {
  checkWatchList,
  addTowatchList,
  getAllWatchListMovies,
} from "../controllers";

/* GET users listing. */

router.post("/add-to-watch-list", addTowatchList);
router.get("/check-watch-list/:movieId", checkWatchList);
router.get("/get-watch-list-movies", getAllWatchListMovies);

module.exports = router;
