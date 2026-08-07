const endDate = new Date("2026-11-19T00:00:00").getTime();

const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const dd = document.getElementById("dd");
const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");

const dayDot = document.querySelector(".dayDot");
const hourDot = document.querySelector(".hourDot");
const minuteDot = document.querySelector(".minuteDot");
const secondDot = document.querySelector(".secondDot");

const preorderDate = new Date("2026-06-25T00:00:00").getTime();
const preorderDays = document.getElementById("preorderDays");
const preorderHours = document.getElementById("preorderHours");
const preorderMinutes = document.getElementById("preorderMinutes");
const preorderSeconds = document.getElementById("preorderSeconds");

const trailerDate = new Date("2026-08-27T19:00:00Z").getTime();
const trailerDays = document.getElementById("trailerDays");
const trailerHours = document.getElementById("trailerHours");
const trailerMinutes = document.getElementById("trailerMinutes");
const trailerSeconds = document.getElementById("trailerSeconds");

setInterval(() => {

    const now = new Date().getTime();
    let distance = endDate - now;
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = d + "<br><span>Dni</span>";
    hour.innerHTML = h + "<br><span>Godzin</span>";
    minute.innerHTML = m + "<br><span>Minut</span>";
    second.innerHTML = s + "<br><span>Sekund</span>";

    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;

    dayDot.style.transform = `rotate(${d * 0.986}deg)`;
    hourDot.style.transform = `rotate(${h * 15}deg)`;
    minuteDot.style.transform = `rotate(${m * 6}deg)`;
    secondDot.style.transform = `rotate(${s * 6}deg)`;

    if (distance <= 0) {
        document.getElementById("timeCounter").style.display = "none";
        document.querySelector(".announcement").style.display = "block";
    }

    let preorderDistance = preorderDate - now;
    if (preorderDistance > 0) {
        let pd = Math.floor(preorderDistance / (1000 * 60 * 60 * 24));
        let ph = Math.floor((preorderDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let pm = Math.floor((preorderDistance % (1000 * 60 * 60)) / (1000 * 60));
        let ps = Math.floor((preorderDistance % (1000 * 60)) / 1000);
        preorderDays.innerHTML = pd + "<br><span>Dni</span>";
        preorderHours.innerHTML = ph + "<br><span>Godzin</span>";
        preorderMinutes.innerHTML = pm + "<br><span>Minut</span>";
        preorderSeconds.innerHTML = ps + "<br><span>Sekund</span>";
    } else {
        document.getElementById("preorderCounter").style.display = "none";
        document.getElementById("preorderButtons").style.display = "flex";
    }

    let trailerDistance = trailerDate - now;
    if (trailerDistance > 0) {
        let td = Math.floor(trailerDistance / (1000 * 60 * 60 * 24));
        let th = Math.floor((trailerDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let tm = Math.floor((trailerDistance % (1000 * 60 * 60)) / (1000 * 60));
        let ts = Math.floor((trailerDistance % (1000 * 60)) / 1000);
        trailerDays.innerHTML = td + "<br><span>Dni</span>";
        trailerHours.innerHTML = th + "<br><span>Godzin</span>";
        trailerMinutes.innerHTML = tm + "<br><span>Minut</span>";
        trailerSeconds.innerHTML = ts + "<br><span>Sekund</span>";
    } else {
        document.getElementById("trailerCounter").style.display = "none";
        document.getElementById("trailerButton").style.display = "block";
    }

}, 1000);