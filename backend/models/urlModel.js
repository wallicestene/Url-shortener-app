const mongoose = require("mongoose")
const Schema = mongoose.Schema

const urlSchema = new Schema({
    longUrl: String,
    shortId: String,
})

module.exports = mongoose.model("url", urlSchema)