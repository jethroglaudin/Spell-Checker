/*global axios*/

function findWord(){
const word = document.querySelector('#input').value;    
const url = "/api" + "?" + "word=" + word;
axios.get(url)
    .then(response =>{
        console.log(response.data);
        document.querySelector('#searchResult').innerHTML = response.data;
    });
}
