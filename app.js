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
    wish = "Early Afternoon";
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

const prompts = () => prompt('Enter your name');

const takeName = document.getElementById("names");

const nameValue = localStorage.getItem("name");
 
const changeName = document.getElementById("changeName")

changeName.addEventListener('click', function () {
    takeName.innerHTML = prompts();
    localStorage.setItem('name', takeName.innerHTML);
})

if(nameValue){
    takeName.innerHTML = nameValue;
}
else{
    takeName.innerHTML = prompts();
    localStorage.setItem('name', takeName.innerHTML)
}

const submitMode = document.getElementById("sum").addEventListener('click', function () {
    const qna = document.getElementById("qna");
    const getMode = document.getElementById("getMood").value;
    console.log(getMode);
    if(getMode == 'good' || getMode == 'fine' || getMode == 'better' || getMode == 'alhamdulillah'){
        qna.innerHTML = 'I am glad to hear that you are having a good day 😊'
    }
    else if(getMode == 'bad'){
        qna.innerHTML = `It makes me sad to hear that you're having a bad day!`
    }
    else if(getMode == 'not bad'){
        qna.innerHTML = 'Ohhh....I wish you spent a good day'
    }
    else if(getMode == 'normal'){
        qna.innerHTML = ''
    }

})

/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX1brdXRYmPf5?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe> */


// https://open.spotify.com/embed/playlist/37i9dQZF1EQncLwOalG3K7?utm_source=generator

const addPlaylist = document.getElementById("addPlaylist").addEventListener("click", function(){
    const listValue = prompt('Enter Playlist Value');
    const row = document.getElementById('row');
    const show2 = document.createElement('div');
        show2.className = `col-4`;
        show2.innerHTML = `
        <iframe style="border-radius:12px" src=${listValue} width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      `
        row.appendChild(show2);
});