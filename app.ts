"use strict"

import express from 'express';
import dotenv from 'dotenv';
import RestApi from './src/rest_api';

dotenv.config();

const app: express.Application = express();
const start_time = new Date();

const rest_container = new RestApi(app);


/*
  App is edited in place in the RestApi Object which feels really damn weird
*/

app.get("/ping", (req, res) => {
  let now_time: Date = new Date();
  res.send({uptime: now_time.getTime() - start_time.getTime(), data: "live"});
})

app.listen(
  process.env.PORT
);

console.log(`Listening on ${process.env.PORT}`);
