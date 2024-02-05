const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({
    User_Name: { type: String, required: true, unique: true },
    User_Mail: { type: String, required: true },
    OTP: { type: String },
    OTP_Created_Time: { type: Date },
    OTP_Attempts: { type: Number, default: 0 },
    isBlocked: { type: Boolean, default: false },
    Block_Until: { type: Date },
    Password: { type: String, required: true },
    Friends: { type: [String], default: [] },
    Friend_Request: { type: [String], default: []},
    Study_Groups: { type: [String], default: []}
});

module.exports = mongoose.model("User", User_Schema);