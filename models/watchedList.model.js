import { Schema, model } from "mongoose";

const watchListSchema = new Schema({
  id: {
    type: Number,
    require: true,
  },
  vote_average: {
    type: Number,
    require: true
  },
  release_date: {
    type: String,
    require: true
  },

  original_title: {
    type: String,
    require: true
  },
  overview: {
    type: String,
    require: true
  },
  poster_path: {
    type: String,
    require: true
  },
});

module.exports.watchListModel = model("watchList", watchListSchema);
