import express from "express";
const router = express.Router();
import { allMovies , movieDetails } from "../controllers"

router.get("/get-movies/:pageId",allMovies)
router.get("/get-movie-details/:movieId",movieDetails )

module.exports = router;