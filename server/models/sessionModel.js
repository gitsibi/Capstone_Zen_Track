const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    task: { type: String, required: true },
    duration: { type: Number, required: true }, // Duration in minutes
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Session', SessionSchema);
