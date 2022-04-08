var today = new Date();
var time = today.getHours();
let wish = "";
if(time>=21 && time>= 18){
    wish = "Night";
}
else if(time>= 18 && time>=21){
    wish = "Evening";
}
else if(time>= 13 && time>=18){
    wish = "Afternoon";
}
else if(time>= 7 && time>=13){
    wish = "Morning";
}
else if(time>= 0 && time>=7){
    wish = "Early Morning";
}
document.getElementById("wish").innerHTML = wish;
var value = Math.random()*100;
value = Math.round(value);
var url = `https://picsum.photos/2000/1900?random=${value}`
document.body.style.backgroundImage = `url(${url})`;


function clock() {
    var hours = document.getElementById("hours");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
    var phase = document.getElementById("phase");

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = "AM";

    if (h > 12) {
        h = h - 12;
        var am = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    phase.innerHTML = am;
}

var interval = setInterval(clock, 1000);