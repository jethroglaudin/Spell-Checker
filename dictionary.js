const fs = require('fs');


let dictionary = fs.readFileSync('words_dictionary.json');
let newDictionary = JSON.parse(dictionary);

    // console.log(newDictionary);
    
module.exports = newDictionary;
   
