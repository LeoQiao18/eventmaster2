const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema({
    name: String,
    date: String,
    time: String,
    description: { type: String, required: false },
    _participants: [{ type: Schema.Types.ObjectId, ref: "users" }]
});

mongoose.model("events", eventSchema);
