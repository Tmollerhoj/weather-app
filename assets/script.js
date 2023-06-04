var APIKey ="de6f9bacaf5359a3d6e494c4a835ccc2"
var searchBarEl = document.querySelector('#search-bar');

function SearchFormSubmit(event) {
    event.preventDefault();

var input = document.querySelector('#search-input');
var main = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var wind = document.querySelector('.wind');


fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid='+APIKey+'&units=imperial')
.then(response => response.json())
.then(data => {
    console.log(data);
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var windValue = data['wind']['speed'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Description:  "+descValue;
  temp.innerHTML = "Temperature:  "+tempValue+"F";
  wind.innerHTML = "Wind Speed:  "+windValue+"mph";
  input.value ="";

})

.catch(err => console.log("Error: City name not found!"));
}

searchBarEl.addEventListener('submit', SearchFormSubmit);