import axios from 'axios';

window.onload = main; 

var brewList = document.querySelector('#brews');
var computedList = "";

function main() {
    axios.get('https://api.openbrewerydb.org/breweries')
    .then(function(r) {
        
        r.data.forEach(function(brew) {
            
            computedList = computedList  + '<li>' + brew.name + '</li>';
            brew.name;
        });
        
        brewList.innerHTML = computedList;
    
    });
    
    console.log('after request')
}