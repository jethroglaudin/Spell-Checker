const express = require("express");
// const words = require('./spellcheck');
const dictionary = require('./dictionary'); 
const app = express();
const port = process.env.Port || 8080;
// process.env.Port grabs its default port || 5000 checks if the first argument exists if not it uses 5000//

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/api', function (req, res){
    console.log(req.query.word);
const word = req.query.word;
let found = `<div class="found">${word} was succesfully found in the dictionary</div>`;
let missing = `<div class="missing">No Matches Found for ${word}</div>`;
if (dictionary.hasOwnProperty(word.toLowerCase()) === true) {
res.send(found);
} else {
    res.send(missing);
}
});

app.listen(port, () => console.log(`App listening on port ${port}!`));