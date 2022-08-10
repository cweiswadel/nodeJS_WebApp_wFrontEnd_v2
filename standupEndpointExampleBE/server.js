//https://betterprogramming.pub/stand-up-a-node-js-rest-api-in-just-9-minutes-1a1f60fe5fc2
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  Entry = require("./api/models/leaderboardModel");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//from ./config/db.env file, which is not sent in commit to GitHub
const mongoDB = {
  mongoUser: process.env.MONGO_USER,
  mongoPW: process.env.MONGO_PASSWORD
};

let mongoURL = `mongodb+srv://${mongoDB.mongoUser}:${mongoDB.mongoPW}@cluster0.jo1xq.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(
  mongoURL,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

var cors = require('cors')
app.use(cors()) // Use this after the variable declaration

var routes = require("./api/routes/leaderboardRoutes");
routes(app);

app.listen(port);


console.log("API server started on localhost:" + port);
