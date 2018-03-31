const passport = require("passport");
const requireNoAuth = require("../middlewares/api_requireNoAuth");

module.exports = app => {
    app.get(
        "/auth/google",
        requireNoAuth,
        passport.authenticate("google", {
            scope: ["profile", "email"]
        })
    );

    app.get(
        "/auth/google/callback",
        requireNoAuth,
        passport.authenticate("google"),
        (req, res) => {
            res.redirect("/");
        }
    );

    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect("/login");
    });

    app.get("/api/current_user", (req, res) => {
        res.send(req.user);
    });
};
