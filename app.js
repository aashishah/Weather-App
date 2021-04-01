
const body = document.querySelector("body");
const tempDiv = document.getElementById("temp");
const iconDiv = document.getElementById("icon");
const textDiv = document.getElementById("cityname");
const icontextDiv = document.getElementById("icontext");
const APIkey = ""; //YourAPIKey
let city = "London"; //Default
let colors = {"Clouds" : ["#CAC4C3", "#00000"], "Clear" : ["#FFF3F1", "#000000"], "Thunderstorm": ["#C58A37", "#FFFFFF"], "Drizzle": ["#81F5C7", "#000000"], "Rain": ["#499778", "#FFFFFF"], "Snow": ["#FFFFFF", "#000000"], "Atmosphere":["#283530", "#FFFFFF"]};
//var complement = 0xffffff ^ color;

const getWeather = (city) => {
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIkey}`)
		.then(response =>{
			return response.json();
		})
		.then(response =>{
			textDiv.textContent = city + " Weather:";
			tempDiv.textContent = response["main"]["temp"] + "°F";
			let iconcode = response["weather"][0]["icon"];
			let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
			iconDiv.innerHTML = `<img src=${iconurl}>`;
			let description = response["weather"][0]["main"];
			icontextDiv.textContent = description;
			body.style.backgroundColor = colors[description][0];
			body.style.color = colors[description][1];
		})
		.catch(err =>{
			console.log(err);
		})
}


const button = document.getElementById("btn");
button.addEventListener('click', function(){
	const inp = document.getElementById("textbox").value;
	city = inp;
	inp.textContent = "";
	getWeather(city);
});






