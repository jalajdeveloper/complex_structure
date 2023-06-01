const mongoose = require("mongoose");
const URL = process.env.DB_ATLAS_URL;

mongoose.connect(URL)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })