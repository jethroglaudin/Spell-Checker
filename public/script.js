/*global axios*/

function findWord(){
const word = document.querySelector('#input').value;    
const url = "/api" + "?" + "word=" + word;
fetch(url)
    .then(response => response.text())
    .then(function(response){
       document.querySelector('#searchResult').innerHTML = response; 
    });
// axios.get(url)
//     .then(response =>{
//         console.log(response.data);
//         document.querySelector('#searchResult').innerHTML = response.data;
//     });
}


