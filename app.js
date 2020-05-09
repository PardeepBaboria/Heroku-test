const path = require("path");
const express = require("express");
// const viewRouter = require('./routes/viewRoutes');

// Start express app
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/views/index.html`);
});

module.exports = app;
