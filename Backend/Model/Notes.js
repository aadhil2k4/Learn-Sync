const mongoose = require('mongoose');

const Notes_Schema = new mongoose.Schema({
    Notes_Id: { type: Number, required: true, unique: true },
    User_Id: { type: Number, required: true, unique: true },
    Notes_Name: { type: String, required: true },
    Content: { type: String, default: ""}
});

module.exports = mongoose.model("Notes", Notes_Schema);