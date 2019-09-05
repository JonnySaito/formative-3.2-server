// This creates a new schema (table) to contain classwork projects
const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // name: String,
    // author_id: {
    //  type: mongoose.Schema.Types.ObjectID,
    //  ref: 'Author'
    username: String,
    password: String
});

module.exports = mongoose.model('Author', authorsSchema);
