import Countdown from "./Countdown.js";

const timeForWorldCup = new Countdown("21 November 2022 17:00:00 GMT-0300");

setInterval(() => {
  document.querySelector(
    "#countdown"
  ).innerHTML = `${timeForWorldCup.total.days} dias, ${timeForWorldCup.total.hours}:${timeForWorldCup.total.minutes}:${timeForWorldCup.total.secounds}`;
}, 1000);

document.querySelector(
  "#countdown"
).innerHTML = `${timeForWorldCup.total.days} dias, ${timeForWorldCup.total.hours}:${timeForWorldCup.total.minutes}:${timeForWorldCup.total.secounds}`;
