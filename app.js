const path = require("path");
const express = require("express");
const cors = require("cors");
// const viewRouter = require('./routes/viewRoutes');

// Start express app
const app = express();

app.use(cors());
// Access-Control-Allow-Origin *
// api.natours.com, front-end natours.com
// app.use(cors({
//   origin: 'https://www.natours.com'
// }))

app.options("*", cors());
// app.options('/api/v1/tours/:id', cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
