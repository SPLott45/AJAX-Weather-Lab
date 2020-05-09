

let weatherData;
let userInput;


const $city = $('#city');
const $temperature = $('#temperature');
const $feels = $('#feels');
const $weather = $('#weather');
const $input = $('input[type="text"]')


$('form').on('submit', handleGetData)

function handleGetData(event) {
    event.preventDefault();

    if($input.val() === "") return;

    userInput = $input.val();

    $input.val(""); //clears the input after user submits

    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=960c3476cdae8f2f62ae298a76a03b04' 
     }).then(function(data) {
        
        weatherData = data;
        render(); 
     
     }, function(error) {
         console.log(error)
});
}

function render() {
    $city.html(weatherData.name);
    $temperature.html(weatherData.main.temp);
    $feels.html(weatherData.main.feels_like);
    $weather.html(weatherData.weather[0].description);
}

