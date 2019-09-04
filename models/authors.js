// This creates a new schema (table) to contain classwork projects
const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
});

module.exports = mongoose.model('Author', authorsSchema);
