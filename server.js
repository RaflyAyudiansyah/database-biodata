const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

const db = require("./app/models");
db.sequelize
  .sync()
  .then(() => {
    console.log("synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const data_diri = require("./app/controllers/controllers.js");
// create bio route
app.post("/", (req, res) => {
  data_diri.create(req, res);
});
// find all bio route
app.get("/", (req, res) => {
  data_diri.findAll(req, res);
});
// find bio by id route
app.get("/:id", (req, res) => {
  data_diri.findOne(req, res);
});
// delete bio with an id route
app.delete("/:id", (req, res) => {
  data_diri.delete(req, res);
});

// update bio with an id route
app.post("/:id", (req, res) => {
  data_diri.update(req, res);
});
