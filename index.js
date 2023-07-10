const express = require("express");
const app = express();
const GenericRouter = require("./routes/genericCRUD");
const GenericController = require("./controllers/genericCRUD");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(errorHandler);
app.use(function (req, res, next) {
  if (["POST", "PUT", "PATCH"].includes(req.method)) {
    if (!req.is("application/json")) {
      return res.sendStatus(400);
    }
  }
  next();
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => console.log("Server started on port 3000"));
