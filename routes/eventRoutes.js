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

  app.post("/api/events", requireAuth, requireAdmin, async (req, res) => {
    const promises = req.body.map(async event => await new Event(event).save());

    res.status(200).send(await Promise.all(promises));
  });
};
