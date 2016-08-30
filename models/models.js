var mongoose = require('mongoose');

var pollSchema = new mongoose.Schema({
    subject: String,
    username: String
});

mongoose.model('Poll', pollSchema);