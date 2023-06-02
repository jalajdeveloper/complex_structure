import { watchListModel } from "../models";

module.exports.addTowatchList = (req, res, next) => {
  const { movieId } = req.body;
  watchListModel
    .create({ movieId: movieId })
    .then((movie) => {
      return res.status(200).send({ msg: "Movie is added in watchlist", movieExist: true });
    })
    .catch((err) => {
      return res
        .status(200)
        .send({ msg: "Something went wrong while saving", ...err });
    });
};

module.exports.checkWatchList = (req, res, next) => {
  const { movieId } = req.params;

  watchListModel
    .findOne({ movieId: parseInt(movieId) })
    .then((movie) => {
        if(movie){
            return res.status(200).send({ msg: "Movie Exists"  , movieExist: true});
        } else {
            return res.status(200).send({ msg: "Movie Not Exists Please Add IT In Your WatchList" , movieExist: false });
        }
      
    })
    .catch((err) => {
        return res
        .status(200)
        .send({ msg: "Something went wrong while saving", ...err });
    });
};
