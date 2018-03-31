const path = require("path");
const redirectAuth = require("../middlewares/redirectAuth");

module.exports = app => {
    app.get("/login", redirectAuth, (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/login.html"));
    });
};
