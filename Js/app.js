const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let giveaway = document.querySelector('.giveaway');
let deadline = document.querySelector('.deadline');
let items = document.querySelectorAll('.deadline-format h4');
// console.log(items);

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 1, 21, 10,17,0);
// console.log(futureDate);
let futureDate = new Date(tempYear,tempMonth,tempDay+10,10,25,0 );
let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let mins = futureDate.getMinutes();
// console.log(mins);
let day = futureDate.getDate();

let week = weekdays[futureDate.getDay()];
// console.log(week);
let month = futureDate.getMonth();
month = months[month];

// If Minutes are less than 10 then should be displayed as double digit
if (mins < 10) {
  mins = `0${mins}`
  // console.log(mins);
}

giveaway.textContent = `giveaway ends on ${week}, ${day} ${month} ${year} ${hours}:${mins}`;

// Future Time in Ms
let futureTime = futureDate.getTime();
// console.log(futureTime);

function getRemainingTime() {
  let today = new Date().getTime();
  // console.log(today);
  let t = futureTime - today;  // Remaining Time
  // console.log(t);

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr

  let oneDay = 24 * 60 * 60 * 1000;
  let oneHour = 60 * 60 * 1000;
  let oneMin = 60 * 1000;
  let oneSec = 1000;
  // console.log(oneDay);
  // console.log(oneHour);
  // console.log(oneMin);

  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  // console.log(days);
  // console.log(hours);
  let mins = Math.floor((t % oneHour) / oneMin);
  // console.log(mins);
  let secs = Math.floor((t % oneMin) / oneSec);
  // console.log(secs);

  //set values Array

  function format(item) {
    if (item < 10) {
      return item = `0${item}`;
    }
    return item;
  }

  const values = [days,hours,mins,secs];

  items.forEach(function(item,index){
    
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry,this giveaway has expired</h4>`
  }
}
// CountDown

let countDown = setInterval(getRemainingTime,1000);

getRemainingTime();