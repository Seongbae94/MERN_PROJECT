const express = require("express");
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const app = express();

app.use("/api/places", placesRoutes);

app.use((error, req, res, next) => {
  if (res.headersSent) {
    console.log("headersSent");
    return next(error);
  }
  console.log("!headersSent");
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
