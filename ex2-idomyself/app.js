const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');





function setDate() {
    const now = new Date();

    seconds = now.getSeconds();
    secondDegree = seconds * 6 + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    minutes = now.getMinutes();
    minuteDegree = minutes * 6 + seconds / 10 + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    hours = now.getHours();
    hourDegree = hours * 30 + minutes / 2 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

function getCurrenTime() {
    const now = new Date();
    let session = "AM";
    digiSecond = now.getSeconds();
    digiMinute = now.getMinutes();
    digiHour = now.getHours();

    if (digiHour == 12) {
        digiHour = 0;
        session = "AM";
    }
    if (digiHour > 12) {
        digiHour = digiHour - 12;
        session = "PM";
    }
    digiHour = (digiHour < 10) ? "0" + digiHour : digiHour;
    digiMinute = (digiMinute < 10) ? "0" + digiMinute : digiMinute;
    digiSecond = (digiSecond < 10) ? "0" + digiSecond : digiSecond;
    let time = digiHour + ":" + digiMinute + ":" + digiSecond + " " + session;
    document.getElementById("digi-clock").innerText = time;
    let t = setTimeout(function () {
        getCurrenTime();
    }, 1000);
}
setInterval(setDate, 1000);
setDate();
getCurrenTime();

