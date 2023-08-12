const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Genre schema
const GenreSchema = new Schema({
  title: { type: String, minlength: 3, maxlength: 100 },
});

// Define a virtual property 'url' that generates the URL for the genre using the '_id' field
GenreSchema.virtual("url").get(function() {
  return `/catalog/genre/${this._id}`;
});

// Create and export the Genre model
module.exports = mongoose.model('Genre', GenreSchema);