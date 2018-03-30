const mongoose = require("mongoose");

const Event = mongoose.model("events");

module.exports = app => {
  app.get("/api/events/simple", (req, res) => {
    Event.find({})
      .select("id name time")
      .exec((err, events) => {
        events.sort((a, b) => b.time - a.time); // sort by descending time
        res.send(events);
      });
  });

  app.post("/api/events", (req, res) => {
    console.log(req.body);
    res.send("POST events");
  });
};
