const mongoose = require("mongoose");
const requireAuth = require("../middlewares/api_requireAuth");
const requireAdmin = require("../middlewares/requireAdmin");

const Event = mongoose.model("events");

module.exports = app => {
    app.get("/api/events", requireAuth, (req, res) => {
        Event.find({})
            .select("id name time")
            .exec((err, events) => {
                events.sort((a, b) => b.time - a.time); // sort by descending time
                res.send(events);
            });
    });

    app.post("/api/events", requireAuth, requireAdmin, (req, res) => {
        console.log(req.body);
        res.send("POST events");
    });
};
