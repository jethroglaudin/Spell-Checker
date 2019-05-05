/*global axios*/

function findWord(){
const word = document.querySelector('#input').value;    
const url = "/api" + "?" + "word=" + word;
// fetch(url)
//     .then(response => response.text())
//     .then(function(response){
//         console.log(response);
//     //   document.querySelector('#searchResult').innerHTML = response; 
//     });
axios.get(url)
    .then(response =>{
        console.log(response);
        document.querySelector('#searchResult').innerHTML = response.data
    });
}

//   let lookedupWord = response.data[0].word;
//         if (word !== lookedupWord ){
//             console.log(`error`)
//         } else{
//             console.log(response.data[0].word);
//             document.querySelector('#searchResult').innerHTML = response.data[0].word;
//         }
        
