let days = document.getElementById('day');
let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let daysDot = document.querySelector('.dayDot');
let hoursDot = document.querySelector('.hourDot');
let minutesDot = document.querySelector('.minuteDot');
let secondsDot = document.querySelector('.secondDot');

let endDate = '12/08/2023 00:00:00';

let x = setInterval(function(){
    let now = new Date(endDate).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / (1000));

    days.innerHTML = d + "<br><span>Dni</span>";
    hours.innerHTML = h + "<br><span>Godzin</span>";
    minutes.innerHTML = m + "<br><span>Minut</span>";
    seconds.innerHTML = s + "<br><span>Sekund</span>";

    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    daysDot.style.transform = `rotateZ(${d * 0.986}deg)`;
    hoursDot.style.transform = `rotateZ(${h * 15}deg)`;
    minutesDot.style.transform = `rotateZ(${m * 6}deg)`;
    secondsDot.style.transform = `rotateZ(${s * 6}deg)`;
    
    if(distance < 0){
        clearInterval(x);
        document.getElementById("timeCounter").style.display = 'none';
        document.querySelector(".announcement").style.display = 'block';
    };
});