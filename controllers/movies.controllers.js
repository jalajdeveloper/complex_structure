import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

//vote_average
//release_date
//original_title
//overview
module.exports.allMovies = (req, res, next) => {
  const { pageId } = req.params;
  const sortingType = req.query.rating;
  let tmdbUrl = "";
    if(sortingType) {
     tmdbUrl = process.env.MOVIES_DATABASE +
     `api_key=${process.env.TMDB_API_KEY}&sort_by=vote_average.${sortingType}&page=${pageId}`
    } else {
      tmdbUrl =  process.env.MOVIES_DATABASE +
      `api_key=${process.env.TMDB_API_KEY}&page=${pageId}`
    }
    
  axios
    .get(tmdbUrl)
    .then((result) => {
      const movies = result.data.results;
      let filteredRes = [];

      for (let i = 0; i < movies.length; i++) {
        const movie = movies[i];
        filteredRes.push({
          vote_average: movie.vote_average,
          release_date: movie.release_date,
          original_title: movie.original_title,
          overview: movie.overview,
          poster_path: movie.poster_path,
          id: movie.id
        });
      }
      return res
        .status(200)
        .send({ page: result.data.page, results: filteredRes });
    })
    .catch((err) => {
      return res.status(400).send({ msg: "Oops Something Went Wrong" });
    });
};

module.exports.movieDetails = (req, res, next) => {
  const { movieId } = req.params;
  axios
    .get(
      process.env.MOVIE_DETAILS +
        `${movieId}?api_key=${process.env.TMDB_API_KEY}`
    )
    .then((result) => {
      return res.status(200).send({ result: result.data });
    })
    .catch((err) => {
      return res.status(400).send({ msg: "Oops Something Went Wrong" });
    });
};
