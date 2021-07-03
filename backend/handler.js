const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Eduardo is sending message from serverless node API !!!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
