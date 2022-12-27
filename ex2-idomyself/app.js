const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate(){
    const now = new Date();

    seconds = now.getSeconds();
    secondDegree = seconds * 6 + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;

    minutes = now.getMinutes();
    minuteDegree = minutes * 6 + seconds/10 + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    hours = now.getHours();
    hourDegree = hours * 30 + minutes/2 + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(setDate,1000);
setDate();
