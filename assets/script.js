var APIKey ="de6f9bacaf5359a3d6e494c4a835ccc2"




var searchBarEl = document.querySelector('#search-bar');
function SearchFormSubmit(event) {
    event.preventDefault();


var city = document.querySelector('#search-input').value;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL)
.then(response => response.json()) 
.then(data => {
	console.log(data)
})
};
searchBarEl.addEventListener('submit', SearchFormSubmit);