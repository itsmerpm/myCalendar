const day = document.getElementById("day");
const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

console.log(weekDays[1]);
day.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
month.innerHTML = allMonths[today.getMonth()]
date.innerHTML = weekDays[today.getDay()];
year.innerHTML = today.getFullYear();