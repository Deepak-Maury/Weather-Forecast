let key = "3a4a39b4b863bc3e8f550696322a998b";
let cnt = 7;
async function checkWeatherData() {
  try {
    let city = document.getElementById("city").value || "kanpur";
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${key}&units=metric`
    );
    let data = await res.json();
    console.log(data)
    var today = new Date(data.city.sunrise * 1000);
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    var formattedToday = dd + "/" + mm + "/" + yyyy;
    let cit = document.querySelector(".city");
    cit.innerHTML = `City:${data.city.name}`;
    let date = document.querySelector(".date");
    date.innerText = `Date : ${formattedToday}`;
    let tem = document.querySelector(".temp");
    tem.innerHTML = `Temprature:${Math.round(data.list[0].main.temp)}°C`;
    let win = document.querySelector(".wind");
    win.innerHTML = `Wind:${data.list[0].wind.speed}km/h`;
    let humi = document.querySelector(".humidity");
    humi.innerHTML = `Humidity:${data.list[0].main.humidity}%`;
    let pre = document.querySelector(".pressure");
    pre.innerHTML = `Pressure:${data.list[0].main.pressure}mb`;
    let desc = document.querySelector(".des")
    desc.innerText = `${data.list[0].weather[0].description}`;
    let ico = document.querySelector(".icons")
    ico.src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    let container_box = document.createElement("div");
    container_box.setAttribute("class", "container_box");
    for (let i = 1; i < data.list.length; i++) {
          var box = document.createElement("div");
          box.setAttribute("class", "box");
          let icon = document.createElement("img");
          icon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
          let desc = document.createElement("div")
          desc.innerText = data.list[i].weather[0].description;
          desc.style.fontWeight = 'bolder'
          let line = document.createElement("hr");
          line.style.margin='5px 0px 5px 0px'
          let temp = document.createElement("p")
          temp.innerText = `Temprature : ${Math.round(data.list[i].main.temp)}°C`;
          let wind = document.createElement("p")
          wind.innerText = `Wind: ${data.list[i].wind.speed}km/h`;
          let humidity = document.createElement("p")
          humidity.innerText = `Humidity : ${data.list[i].main.humidity}%`;
          let pressure = document.createElement("p")
          pressure.innerText = `Pressure : ${data.list[i].main.pressure}mb`;
          box.append(icon,desc,line, temp, wind, humidity, pressure)             
          container_box.append(box)
      }
      console.log(container_box)
    let val = document.getElementById("forecast");
    val.innerHTML = "";
    let result = document.getElementById("forecast");
    result.append(container_box) 
        
 } catch (error) {
    console.log("error", error);
    }
}
checkWeatherData();