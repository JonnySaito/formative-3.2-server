// This creates a new schema (table) to contain our classwork projects
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    // author_id: String,
    // project_name: String,
    // author_name: String,
    // image_URL: String,
    // website_URL: String
});

module.exports = mongoose.model('Project', projectSchema);
