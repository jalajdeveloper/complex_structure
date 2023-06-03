import { watchListModel } from "../models";

module.exports.addTowatchList = async (req, res, next) => {
  const { id } = req.body;
  const movie = watchListModel.findOne({ id: id });

  if (movie) {
    return res.status(400).send({ msg: "Movie already exists" });
  }
  watchListModel
    .create({ ...req.body })
    .then((movie) => {
      return res
        .status(200)
        .send({ msg: "Movie is added in watchlist", movieExist: true });
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
    .findOne({ id: parseInt(movieId) })
    .then((movie) => {
      if (movie) {
        return res.status(200).send({ msg: "Movie Exists", movieExist: true });
      } else {
        return res.status(200).send({
          msg: "Movie Not Exists Please Add IT In Your WatchList",
          movieExist: false,
        });
      }
    })
    .catch((err) => {
      return res
        .status(200)
        .send({ msg: "Something went wrong while saving", ...err });
    });
};

module.exports.getAllWatchListMovies = async (req, res, next) => {
  watchListModel
    .find()
    .then((movies) => {
      if (movies) {
        return res
          .status(200)
          .send({ msg: "Movie Exists", movieExist: true, results: movies });
      } else {
        return res.status(200).send({
          msg: "Movie Not Exists Please Add IT In Your WatchList",
          movieExist: false,
        });
      }
    })
    .catch((err) => {
      return res
        .status(200)
        .send({ msg: "Something went wrong while saving", ...err });
    });
};
