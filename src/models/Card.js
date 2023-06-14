const mongoose = require("mongoose")
const Connection = require("../config/database")

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  column: {
    type: String,
    enum: ["TODO", "DOING", "DONE"],
    default: "TODO",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
})

const connection = new Connection()

module.exports = connection.model("card", cardSchema, "card")
