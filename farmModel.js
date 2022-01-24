const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    datetime: {
      type: Date,
      required: true,
    },
    sensortype: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Farm = mongoose.model("Farm", farmSchema);
module.exports = Farm;
