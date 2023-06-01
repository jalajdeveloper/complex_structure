const { Schema, model } = require("mongoose");

const watchListSchema = new Schema({
  movieId: {
    type: Number,
    require: true,
  },
});

module.exports.watchListModel = model("watchList", watchListSchema);
