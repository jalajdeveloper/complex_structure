import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config()


module.exports.allMovies = (req, res, next) => {
    const { pageId } = req.params;
    axios.get(process.env.MOVIES_DATABASE+pageId).then(result =>{
       return res.status(200).send({page: result.data.page , results: result.data.results})
    }).catch(err => {
       return res.status(400).send({ msg: "Oops Something Went Wrong" })
    })
};


module.exports.movieDetails = (req, res, next) => {
    const { movieId } = req.params;
    console.log(process.env.MOVIE_DETAILS+`${movieId}?api_key=${process.env.TMDB_API_KEY}`)
    axios.get(process.env.MOVIE_DETAILS+`${movieId}?api_key=${process.env.TMDB_API_KEY}`).then(result =>{
       return res.status(200).send({ result: result.data  })
    }).catch(err => {
       return res.status(400).send({ msg: "Oops Something Went Wrong" })
    })
};