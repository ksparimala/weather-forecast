//Complete the Weather API Backend part using openweathermap api
var apikey='ba975128825a816d94f4d18708fef984';
var msg=document.getElementById("msg");
function getData()
{
    var input=document.getElementById("city").value;
    const url=`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apikey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        document.getElementById("p1").innerHTML="Temp:"+data.main.temp;
        document.getElementById("p2").innerHTML="Temp:"+data.name;
        var icon="http://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
        document.getElementById("icon").src=icon;
    })
    .catch(()=>{
        msg.textContext="Please searcch for valid city";
    });
}