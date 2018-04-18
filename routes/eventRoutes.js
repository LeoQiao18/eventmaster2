const mongoose = require("mongoose");
const requireAuth = require("../middlewares/api_requireAuth");
const requireAdmin = require("../middlewares/requireAdmin");

const Event = mongoose.model("events");

module.exports = app => {
  app.get("/api/events", requireAuth, (req, res) => {
    Event.find({})
      .select("id name startTime endTime date _participants")
      .exec((err, events) => {
        events.sort((a, b) => {
          if (a.date == b.date) {
            return b.time - a.time;
          } else {
            return b.date - a.date;
          }
        }); // sort by descending time
        res.send(events);
      });
  });

  app.post("/api/events", requireAuth, requireAdmin, async (req, res) => {
    const promises = req.body.map(async event => await new Event(event).save());

    res.status(200).send(await Promise.all(promises));
  });

  app.delete("/api/events", requireAuth, requireAdmin, (req, res) => {
    console.log(req.body);
    Event.remove({ _id: { $in: req.body } }, err => {
      if (!err) {
        res.status(200).send(req.body);
        return;
      }
      res.status(500).send({ err });
    });
  });
};
