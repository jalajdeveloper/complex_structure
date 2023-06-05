import * as dotenv from "dotenv";
dotenv.config()
import createHttpError from 'http-errors';
import express from "express";
import path from 'path';
import cookieParser from 'cookie-parser';
import {default as logger} from 'morgan';
import cors from "cors";
import {default as watchListRoutes } from "./routes/watch.route";
import {default as moviesRoutes} from "./routes/movies.route";
import cluster from "node:cluster";
import os from 'os';

import("./db")
const app = express();
const PORT = 4001;







if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;

  // Fork worker processes
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });
} else {

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/movies', watchListRoutes);
app.use('/api/v1/tmdb/movies', moviesRoutes)
app.get("/",(req,res) =>
  res.send({msg: "Welcome To Express"})
)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createHttpError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT,() =>{
  console.log("CONNECTED TO SERVER" , PORT)
})
}


module.exports = app;
