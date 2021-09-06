document.getElementById('search-button').addEventListener('click', function() {
    const searchText = document.getElementById('search-input').value;
    console.log(searchText);
    const API_KEY = 'dfeef97d994eb07158fe843c4e1d73b9';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
});
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayWeather = temperature => {
    setInnerText('cityName', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('clouds', temperature.weather[0].main);
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcone = document.getElementById('wheather-icone');
    imgIcone.setAttribute('src', url);
}