const fs = require('fs');
var cleanWords;

const spellcheck = fs.readFile('words_alpha.txt', 'utf8', function(err, data){
    if (err) throw err;
    var words = data;
     cleanWords = words.split('\n');
    // console.log(cleanWords);
    
   
});

module.exports = cleanWords;