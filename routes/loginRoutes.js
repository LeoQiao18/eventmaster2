const path = require("path");
const redirectAuth = require("../middlewares/redirectAuth");

module.exports = app => {
  app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/login.html"));
  });
};
