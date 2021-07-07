const api = {
    key:'2ebd0ea394349b0e2097eaa3c7a50cd2',
    baseUrl:'https://api.openweathermap.org/data/2.5/',
};
const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress",setQuery) 


function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(searchBox.value)
        console.log(searchBox.value);
    }
}
function getResults(query) {
    fetch(`${api.baseUrl}weather?q=${query}&units=metric&APPID=${api.key}`).then(
        (weather) => {
            return weather.json();
        }
    ).then(displayResults)
}

function displayResults(weather) {
    console.log(weather);
    let city = document.querySelector(".location .city");
    city.innerHTML = `
    ${weather.name}, ${weather.sys.country}
    `;
    let temp = document.querySelector(".temp");
    temp.innerHTML = ` ${weather.main.temp}`;
    let weather2 = document.querySelector(".weather");
    weather2.innerHTML = `${weather.weather[0].main}`
    let hiLow = document.querySelector(".hi-low");
    hiLow.innerHTML = `${weather.main.temp_min} / ${weather.main.temp_max}`
}
function NewDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = 7
    // let day = date.getDay();  
    let day = 7
    let data = document.querySelector(".date");
    data.innerHTML = `Chorshanba  ${day}-${month}-${year}`
    console.log(month);
}
NewDate()