const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    result: {
        type: String,
        enum: ["win", "loss"],
        required: true
    },
    kills: Number,
    deaths: Number,
    assists: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Match", matchSchema);