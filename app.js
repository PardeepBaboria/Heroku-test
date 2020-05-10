const path = require("path");
const express = require("express");
const cors = require("cors");
// const viewRouter = require('./routes/viewRoutes');

// Start express app
const app = express();

app.use(cors());
// Access-Control-Allow-Origin *
// api.natours.com, front-end natours.com
// app.use(
//   cors({
//     origin: "http://www.apnidukaan.net.in",
//   })
// );

app.options("*", cors());
// app.options("/api/v1/tours/:id", cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/views/index.html`);
});
app.get("/login", (req, res) => {
  res.status(200).sendFile(`${__dirname}/views/login.html`);
});

module.exports = app;
