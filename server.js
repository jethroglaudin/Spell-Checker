// console.log('Server is running');
const express = require("express");
const fruits = require('./data');
const words = require('./spellcheck');
const dictionary = require('./dictionary'); 
// console.log(words);
// console.log(Object.keys(dictionary));
const app = express();
const port = 8080;
// process.env.Port grabs its default port || 5000 checks if the first argument exists if not it uses 5000//

// user//
app.get('/', function (req, res){
const userName = req.query.user;
res.send(`Hello ${userName}!`);
});
// dictionary//
app.get('/api', function (req, res){
const word = req.query.word;
if (dictionary.hasOwnProperty(word.toLowerCase())){
res.send(`${word} is here!`);
} else {
    res.send(`The word ${word} is not here. Please try another word.`);
}
});


app.listen(port, () => console.log(`App listening on port ${port}!`));