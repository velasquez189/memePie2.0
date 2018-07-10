const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var memeScheme = new Schema({
    uploadedBy: {
        type: String,
        trim: false,
        // required: "Must be logged-in"
    },
    time: {
        type: Date,
        default: Date.now
    },
    imgFilePath: {
        type: String,
    },
    tags: {
        type: Array,
        trim: false,
    },
    totalVote: {
        type: Number,
        default: 0
    }
})


const Scheme = mongoose.model("Scheme", memeScheme);

module.exports = Scheme;