const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
  name: String,
  date: String,
  startTime: String,
  endTime: String,
  limit: { type: Number, required: false },
  faculty: { type: String, required: false },
  description: { type: String, required: false },
  participants: [{ type: Schema.Types.ObjectId, ref: "users" }]
});

mongoose.model("events", eventSchema);
