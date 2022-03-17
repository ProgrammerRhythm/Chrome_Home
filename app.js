var today = new Date();
var time = today.getHours();
let wish = "";
if(time>=21 && time>= 18){
    wish = "Night";
}
else if(time>= 18 && time<=21){
    wish = "Evening";
}
else if(time>= 13 && time<=18){
    wish = "Afternoon";
}
else if(time>= 7 && time<=13){
    wish = "Morning";
}
else if(time>= 0 && time<=7){
    wish = "Early Morning";
}
var time2 = today.getHours()-12+ ":" + today.getMinutes();
console.log(time,time2);
document.getElementById("time").innerHTML = time2;
document.getElementById("wish").innerHTML = wish;
var value = Math.random()*100;
value = Math.round(value);
var url = `https://picsum.photos/2000/1900?random=${value}`
document.body.style.backgroundImage = `url(${url})`;

document.getElementById('onClick').addEventListener("click", function(){
    location.replace("https://www.github.com/programmerRhythm");
})
