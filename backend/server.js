const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const urlsRouter = require("./routes/urlRoutes")
// initialize the app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// enviroment variables
require("dotenv").config();

// connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // for new version of mongoDB
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
      console.log("Connected to the database");
    });
  })
  .catch((err) => console.log(err.message));

//Api end points
app.use(urlsRouter)

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
