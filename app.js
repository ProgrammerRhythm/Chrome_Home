var today = new Date();
var time = today.getHours();
let wish = "";
if(time>=21 && time>= 18){
    wish = "Night";
    document.body.style.backgroundImage = "url('8.jpeg')";
}
else if(time>= 19 && time<=21){
    wish = "Evening";
    document.body.style.backgroundImage = "url('7.jpeg')";

}
else if(time>= 18 && time<=19){
    document.body.style.backgroundImage = "url('6.jpeg')";
    wish = "Afternoon";
}
else if(time>= 15 && time<=18){
    document.body.style.backgroundImage = "url('5.jpeg')";
    wish = "On going Afternoon";
}
else if(time>= 12 && time<=15){
    document.body.style.backgroundImage = "url('4.jpeg')";
    wish = "Morning";
}
else if(time>= 8 && time<=12){
    document.body.style.backgroundImage = "url('3.jpeg')";
    wish = "Morning";
}
else if(time>= 5 && time<=8){
    document.body.style.backgroundImage = "url('2.jpeg')";
    wish = "Early Morning";
}
else if(time>= 0 && time<=5){
    document.body.style.backgroundImage = "url('1.jpeg')";
    wish = "Early Morning";
}
document.getElementById("wish").innerHTML = wish;
// var value = Math.random()*100;
// value = Math.round(value);
// var url = `https://picsum.photos/2000/1900?random=${value}`
// document.body.style.backgroundImage = `url(${url})`;


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
