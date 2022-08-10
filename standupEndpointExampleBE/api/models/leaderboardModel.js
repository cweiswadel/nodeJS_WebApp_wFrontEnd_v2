var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const schemaObj = exports.schemaObj = {
  player: {
    type: String,
    required: "Please enter a name"
  },
  score: {
    type: Number,
    required: "Please enter a score"
  },
  registered: {
    type: String,
    default: "No"
  }
};

var EntrySchema = new Schema(schemaObj);

module.exports = mongoose.model("Entry", EntrySchema, "Leaderboard");

