const express = require("express");
// const words = require('./spellcheck');
const dictionary = require('./dictionary');
const mongoose = require('mongoose');
const Words = require('./models/Word');
const app = express();
const port = process.env.Port || 8080;
// process.env.Port grabs its default port || 5000 checks if the first argument exists if not it uses 5000//


//check if mongoose connected to mongoDB
// let db = mongoose.connect('mongodb://localhost:27017/spellchecker', function(error){
//     if (error) {
//       console.log(error);  
//     } else{
//       console.log("connection successful");   
//     }
// });
//connect to mongoDB  
mongoose.connect('mongodb://localhost:27017/spellchecker', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api', function (req, res){
    // console.log(req.query.word);
    
let word = req.query.word;
word = word.toLowerCase();
let found = `<div class="found">${word} was succesfully found in the dictionary</div>`;
let missing = `<div class="missing">No Matches Found for ${word}</div>`;
Words.find({word}).then(function(results, error){
    // if (error) { console.log(error)};
    if (!results.length){res.send(missing)}
    else {
     res.send(found)
    console.log(results);   
    }
    
});

// if (dictionary.hasOwnProperty(word.toLowerCase()) === true) {
// res.send(found);
// } else {
//     res.send(missing);
// }
});

app.listen(port, () => console.log(`App listening on port ${port}!`));