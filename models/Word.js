const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    word: {
       type: String,
       required: [true, "Word field is required"]
    }
    
});

const Words = mongoose.model('words', WordSchema);
module.exports = Words;